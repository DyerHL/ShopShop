using ShopShop.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace ShopShop.DataAccess
{
    public interface IListingRepository
    {
       List<Listing> GetAllListings();
    }
}
