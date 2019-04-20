﻿using System;

namespace backend.V1.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }

        public int ClimbId { get; set; }
    }
}
