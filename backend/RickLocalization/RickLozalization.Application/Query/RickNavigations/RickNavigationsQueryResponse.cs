using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.Navigation
{
    public class RickNavigationsQueryResponse 
    {
        public RickNavigationsQueryResponse(int rickId)
        {
            RickId = rickId;
        }
        public int RickId { get; set; }

        public List<RickNavigations> Navigations { get; set; }
    }
    public class RickNavigations
    {
        public string DimensionOrigin { get; set; }
        public string DimensionDestiny { get; set; }
    }
}
