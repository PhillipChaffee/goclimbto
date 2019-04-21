using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;

namespace backend.V1.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {

        [HttpGet("{name}")]
        [ProducesResponseType(200)]
        public ActionResult<Image> GetImage([FromRoute] string name)
        {
            var fileName = "C:/climbImages/" + name;
            return Image.FromFile(fileName);
        }

        [HttpPost("{name}")]
        [ProducesResponseType(typeof(string), 201)]
        public ActionResult<string> PostImage([FromRoute] string name)
        {
            var image = Image.FromStream(Request.Body);
            var fileName = "C:/climbImages/" + name;
            image.Save(fileName);
            return CreatedAtAction(nameof(PostImage), fileName);
        }
    }
}