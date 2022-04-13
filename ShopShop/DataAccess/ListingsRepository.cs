using ShopShop.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace ShopShop.DataAccess
{
    public class ListingsRepository : IListingRepository
    {
        private readonly IConfiguration _config;

        public ListingsRepository(IConfiguration config)
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
        public List<Listing> GetAllListings()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT
                                      Id,
                                      Address,
                                      SquareFoot,
                                      Rent,
                                      Details,
                                      YearBuilt,
                                      City,
                                      ImgUrl,
                                      AgentId,
                                      UserId
                                      FROM Listing
                                      ";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List <Listing> listings = new List<Listing>();
                    while (reader.Read())
                    {
                        Listing listing = new Listing
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            SquareFoot = reader.GetInt32(reader.GetOrdinal("SquareFoot")),
                            Rent = reader.GetInt32(reader.GetOrdinal("Rent")),
                            Details = reader.GetString(reader.GetOrdinal("Details")),
                            YearBuilt = reader.GetInt32(reader.GetOrdinal("YearBuilt")),
                            City = reader.GetString(reader.GetOrdinal("City")),
                            ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                            AgentId = reader.GetInt32(reader.GetOrdinal("AgentId")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId"))
                        };

                        listings.Add(listing);
                    }

                    reader.Close();

                    return listings;
                }
            }
        }

        public Listing GetListingById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT
                                      Id,
                                      Address,
                                      SquareFoot,
                                      Rent,
                                      Details,
                                      YearBuilt,
                                      City,
                                      ImgUrl,
                                      AgentId,
                                      UserId
                                      FROM Listing WHERE Id = @id
                                      ";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Listing listing = new Listing
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            SquareFoot = reader.GetInt32(reader.GetOrdinal("SquareFoot")),
                            Rent = reader.GetInt32(reader.GetOrdinal("Rent")),
                            Details = reader.GetString(reader.GetOrdinal("Details")),
                            YearBuilt = reader.GetInt32(reader.GetOrdinal("YearBuilt")),
                            City = reader.GetString(reader.GetOrdinal("City")),
                            ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                            AgentId = reader.GetInt32(reader.GetOrdinal("AgentId")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId"))
                        };

                        reader.Close();
                        return listing;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }
    }
}

