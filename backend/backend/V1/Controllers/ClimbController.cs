using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.V1.Db;

namespace backend.V1.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ClimbsController : ControllerBase
    {
        private readonly ClimbContext _climbContext;


        public ClimbsController(ClimbContext climbContext)
        {
            _climbContext = climbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Climb.Climb>> GetClimbs()
        {
            return Ok(_climbContext.Climbs);
        }

        [HttpPost]
        public async Task<ActionResult> PostClimb([FromBody] Climb.Climb climb)
        {
            var daClimb = climb;
            var result = await _climbContext.Climbs.AddAsync(daClimb);
            return Accepted(result);
        }
    }
}
