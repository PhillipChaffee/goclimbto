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
            return Ok(new List<Climb> { new Climb
            {
                Notes = "This climb will bust your butt.",
                Grade = Grade.V7,
                Name = "Butt Buster",
                Location = new Location{Country = "United State", State = "PA", City = "Media"},
                Rating = 4,
                Coordinates = new Coordinate{Latitude = 395507.4, Longitude = 752349.6}
            },new Climb
            {
                Notes = "This climb will bust your butt.",
                Grade = Grade.V7,
                Name = "Butt Buster",
                Location = new Location{Country = "United State", State = "PA", City = "Media"},
                Rating = 4,
                Coordinates = new Coordinate{Latitude = 395507.4, Longitude = 752349.6}
            },new Climb
            {
                Notes = "This climb will bust your butt.",
                Grade = Grade.V7,
                Name = "Butt Buster",
                Location = new Location{Country = "United State", State = "PA", City = "Media"},
                Rating = 4,
                Coordinates = new Coordinate{Latitude = 395507.4, Longitude = 752349.6}
            },new Climb
            {
                Notes = "This climb will bust your butt.",
                Grade = Grade.V7,
                Name = "Butt Buster",
                Location = new Location{Country = "United State", State = "PA", City = "Media"},
                Rating = 4,
                Coordinates = new Coordinate{Latitude = 395507.4, Longitude = 752349.6}
            } });
        }
    }
}
