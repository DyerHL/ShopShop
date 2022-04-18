using ShopShop.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace ShopShop.DataAccess
{
    public interface IListingRepository
    {
       List<Listing> GetAllListings();
       Listing GetListingById(int id);
        public void UpdateListing(Listing listing);
        public void DeleteListing(int id);
    }
}
