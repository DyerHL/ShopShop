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
                            ImgURL = reader.GetString(reader.GetOrdinal("ImgURL")),
                        };
                        agents.Add(agent);
                    }
                    reader.Close();
                    return agents;
                }
            }
        }
    }
}
