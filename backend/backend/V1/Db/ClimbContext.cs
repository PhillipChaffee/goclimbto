using backend.V1.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.V1.Db
{
    public class ClimbContext : DbContext
    {
        public ClimbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Climb>().HasOne(c => c.Coordinates);
            modelBuilder.Entity<Climb>().HasOne(c => c.Location);
        }

        public DbSet<Climb> Climbs { get; set; }
        public DbSet<Coordinate> Coordinates { get; set; }
        public DbSet<Location> Locations { get; set; }
    }
}