namespace backend.V1.Climb
{
    public class Climb
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public Coordinate Coordinates { get; set; } 
        public string Grade { get; set; }
        public decimal Rating { get; set; }
        public string Notes { get; set; }
        public string ImageLocation { get; set; }
    }
}
