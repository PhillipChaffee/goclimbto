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
        public string Grade { get; set; }
        public string Description { get; set; }
        public Uri ImageLocation { get; set; }
    }
}
