using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.V1.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ClimbsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Climb>> GetClimbs()
        {
            return Ok(new List<Climb> { new Climb { Description = "sadkjgfhsadf", Grade = Grade.V0, Name = "DaClimb" } });
        }
    }
}
