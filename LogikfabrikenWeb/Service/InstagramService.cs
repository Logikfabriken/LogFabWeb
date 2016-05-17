using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace LogikfabrikenWeb.Service
{
    public class InstagramService
    {
        public static async Task<InstagramFeed> GetFeed(string user)
        {
            var url = String.Format("https://www.instagram.com/{0}/media/", user);
            HttpClient client = new HttpClient();
            var response = await client.GetAsync(url);
            if (!response.IsSuccessStatusCode)
            {
                var errorData = await response.Content.ReadAsStringAsync();
                System.Diagnostics.Trace.TraceError(errorData);
            }

            var data = await response.Content.ReadAsAsync<InstagramFeed>();
            return data;
        }
    }
}