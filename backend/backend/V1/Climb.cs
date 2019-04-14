using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.V1
{
    public class Climb
    {
        public string Name { get; set; }
        public Location Location { get; set; }
        public Coordinate Coordinates { get; set; } 
        public string Grade { get; set; }
        public decimal Rating { get; set; }
        public string Notes { get; set; }
        public Uri ImageLocation { get; set; }
    }
}
