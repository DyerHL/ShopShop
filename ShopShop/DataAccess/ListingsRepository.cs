using ShopShop.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace ShopShop.DataAccess
{
    public class ListingsRepository : IListingRepository
    {
        private readonly IConfiguration _config;

        public Listing Repository(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection");
            }
        }
        public List<Listing> GetAllListings()
        {
            using (SqlConnection conn = Connection)
        }
    }
}

