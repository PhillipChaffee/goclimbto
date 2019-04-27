using backend.V1.Db;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.V1.Models;

namespace backend.V1.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class ClimbsController : ControllerBase
    {
        private readonly ClimbContext _climbContext;


        public ClimbsController(ClimbContext climbContext)
        {
            _climbContext = climbContext;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Climb>), 200)]
        public async Task<ActionResult<IEnumerable<Climb>>> GetClimbs()
        {
            return Ok(await _climbContext.Climbs.Include(c => c.Coordinates).Include(c => c.Location).ToListAsync());
        }

        [HttpPost]
        [ProducesResponseType(typeof(Climb), 201)]
        public async Task<ActionResult<Climb>> PostClimb([FromBody] Climb climb)
        {
            await _climbContext.Climbs.AddAsync(climb);
            await _climbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(PostClimb), new { id = climb.ClimbId }, climb);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(202)]
        [ProducesResponseType(404)]
        public async Task<ActionResult> DeleteClimb([FromRoute] int id)
        {
            var climb = await _climbContext.FindAsync<Climb>(id);

            if (climb == null)
            {
                return NotFound();
            }

            _climbContext.Remove(climb);
            await _climbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
