using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Domain.Entities
{
    public class Navigation : BaseEntity
    {
        public string DimensionOrigin { get; set; }
        public string DimensionDestiny { get; set; }
        public int RickId { get; set; }
        public Rick Rick { get; set; }
    }
}
