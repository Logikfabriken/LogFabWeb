using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LogikfabrikenWeb
{
    public class InstagramFeed
    {
        [JsonProperty("items")]
        public List<InstagramPost> Posts { get; set; }
    }
}