using LogikfabrikenWeb.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace LogikfabrikenWeb.api
{
    [RoutePrefix("api/instagram")]
    public class InstagramController : ApiController
    {
        [Route("")]
        [HttpGet]
        public async Task<InstagramFeed> GetFeed()
        {
            var url = "https://www.instagram.com/logikfabriken/media/";

            HttpClient client = new HttpClient();
            var response = await client.GetAsync(url);
            if(!response.IsSuccessStatusCode)
            {
                var errorData = await response.Content.ReadAsStringAsync();
            }


            var data = await response.Content.ReadAsAsync<InstagramFeed>();

            return data;

        }

    }
}
