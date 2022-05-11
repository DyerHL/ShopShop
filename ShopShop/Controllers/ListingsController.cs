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

        [HttpGet("Listings/{id}")]
        public ActionResult GetListingById(int id)
        {
            Listing listing = _listingRepo.GetListingById(id);
                if (listing == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(listing);
            }
        }

        [HttpGet("Listings/agent/{uid}")]
        public ActionResult GetListingByAgentUid(string uid)
        {
            List<Listing> listings = _listingRepo.GetListingsByAgentUid(uid);
            if (listings == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(listings);
            }
        }

        [HttpPost]

        public ActionResult AddListing(Listing newListing)
        {
            if(newListing == null)
            {
                return NotFound();
            }
            else
            {
                _listingRepo.AddListing(newListing);
                return Ok(newListing);
            }

        }

        [HttpPatch("Listings/id")]
        public ActionResult UpdateListing(int id, Listing updateListing)
        {
            try
            {
                _listingRepo.UpdateListing(updateListing);
                return Ok(updateListing);
            }
            catch (Exception ex)
            {
                return BadRequest(updateListing);
            }
        }

        [HttpDelete("Listings/{id}")]
        public ActionResult DeleteListing(int id)
        {
            try
            {
                _listingRepo.DeleteListing(id);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return BadRequest("DELETE FAILED");
            }
        }
    }
}
