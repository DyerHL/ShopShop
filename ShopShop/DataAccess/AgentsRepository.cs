using Microsoft.Data.SqlClient;
using ShopShop.Models;

namespace ShopShop.DataAccess
{
    public class AgentsRepository : IAgentsRepository
    {
        private readonly IConfiguration _config;

        public AgentsRepository(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        //Get all agents
        public List<Agent> GetAllAgents()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
	                                           [Name],
	                                           Phone,
	                                           Email, 
	                                           ImgURL
                                        FROM Agent";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Agent> agents = new List<Agent>();
                    while (reader.Read())
                    {
                        Agent agent = new Agent()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            ImgURL = reader.GetString(reader.GetOrdinal("ImgURL"))
                        };
                        agents.Add(agent);
                    }
                    reader.Close();
                    return agents;
                }
            }
        }

        //Get an agent by Id
        public Agent GetAgentById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
	                                           [Name],
	                                           Phone,
	                                           Email, 
	                                           ImgURL
                                        FROM Agent
										WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Agent agent = new Agent()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            ImgURL = reader.GetString(reader.GetOrdinal("ImgURL"))
                        };
                        reader.Close();
                        return agent;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        //Add an agent

        public void AddAgent(Agent agent)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Agent ([Name],
					                                        Email,
					                                        Phone,
					                                        ImgURL)
                                        OUTPUT INSERTED.Id
                                        VALUES (@name, @email, @phone, @phone)";

                    cmd.Parameters.AddWithValue("@name", agent.Name);
                    cmd.Parameters.AddWithValue("@email", agent.Email);
                    cmd.Parameters.AddWithValue("@phone", agent.Phone);
                    cmd.Parameters.AddWithValue("@ImgUrl", agent.ImgURL);

                    int id = (int)cmd.ExecuteScalar();

                    agent.Id = id;
                }
            }
        }

        //Update an agent

        public void UpdateAgent(Agent agent)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Agent
                                        SET [Name] = @name, 
                                            Email = @email, 
                                            Phone = @phone
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", agent.Name);
                    cmd.Parameters.AddWithValue("@email", agent.Email);
                    cmd.Parameters.AddWithValue("@phone", agent.Phone);
                    cmd.Parameters.AddWithValue("@id", agent.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //Delete an agent

        public void DeleteAgent(int agentId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Agent
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", agentId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //Agent Exists?
        public bool AgentExists(string uid)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"       SELECT Id,
	                                           [Name],
	                                           Phone,
	                                           Email, 
	                                           ImgURL,
                                               UID
                                        FROM Agent
										WHERE UID = @uid";

                    cmd.Parameters.AddWithValue("@uid", uid);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        return true;
                    }
                    else
                    {
                        reader.Close();
                        return false;
                    }
                }
            }
        }
    }
}
