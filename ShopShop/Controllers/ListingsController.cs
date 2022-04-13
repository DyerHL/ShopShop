using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopShop.DataAccess;
using ShopShop.Models;

namespace ShopShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        private readonly IListingRepository _listingRepo;

        public ListingsController(IListingRepository listingRepository)
        {
            _listingRepo = listingRepository;
        }

        [HttpGet]

        public List<Listing> GetAllListings()
        {
            return _listingRepo.GetAllListings();
        }
    }
}
