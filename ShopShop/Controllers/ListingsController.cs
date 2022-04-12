using Microsoft.AspNetCore.Mvc;

namespace ShopShop.Controllers
{
    public class ListingsController : ControllerBase
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
