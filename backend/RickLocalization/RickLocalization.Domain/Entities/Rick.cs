using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Domain.Entities
{
    public class Rick : BaseEntity
    {       
        public string DimensionOriginName { get; set; }
        public string Details { get; set; }
        public string ImgUrl { get; set; }
        public List<Navigation> Navigations { get; set; }

    }
}
