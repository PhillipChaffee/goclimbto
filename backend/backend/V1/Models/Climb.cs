namespace backend.V1.Models
{
    public class Climb
    {
        public int ClimbId { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public Coordinate Coordinates { get; set; } 
        public string Grade { get; set; }
        public decimal Rating { get; set; }
        public string Notes { get; set; }
        public string ImageLocation { get; set; }
    }
}
