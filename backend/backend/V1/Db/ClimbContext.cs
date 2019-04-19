using Microsoft.EntityFrameworkCore;

namespace backend.V1.Db
{
    public class ClimbContext : DbContext
    {
        public ClimbContext(DbContextOptions<ClimbContext> options) : base(options)
        {
        }

        public DbSet<Climb.Climb> Climbs { get; set; }
    }
}