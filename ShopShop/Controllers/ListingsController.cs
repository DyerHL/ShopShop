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

        [HttpGet("Listings/agent/{agentId}")]
        public ActionResult GetListingByAgentId(int agentId)
        {
            List<Listing> listings = _listingRepo.GetListingsByAgentId(agentId);
            if (listings == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(listings);
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
        public ActionResult DeleteListing(int id, Listing listing)
        {
            try
            {
                _listingRepo.DeleteListing(id);
                return Ok(listing);
            }
            catch (Exception ex)
            {
                return BadRequest(listing);
            }
        }
    }
}
