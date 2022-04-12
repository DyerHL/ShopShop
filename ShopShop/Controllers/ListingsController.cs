using Microsoft.AspNetCore.Mvc;

namespace ShopShop.Controllers
{
    public class ListingsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
