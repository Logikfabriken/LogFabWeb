using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace LogikfabrikenWeb.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        // GET: Home
        [Route("")]
        public async Task<ActionResult> Index()
        {
            return View();
        }
    }
}