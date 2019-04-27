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
    [Route("v1/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {
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