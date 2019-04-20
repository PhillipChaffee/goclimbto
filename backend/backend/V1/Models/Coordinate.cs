using System;

namespace backend.V1.Models
{
    public class Coordinate
    {
        public int CoordinateId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public int ClimbId { get; set; }
    }
}