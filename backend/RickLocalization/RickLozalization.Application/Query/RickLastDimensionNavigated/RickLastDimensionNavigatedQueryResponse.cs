using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.RickLastDimensionNavigated
{
    public class RickLastDimensionNavigatedQueryResponse
    {
        public RickLastDimensionNavigatedQueryResponse(string currentDimension)
        {
            CurrentDimension = currentDimension;
        }
        public string CurrentDimension { get; set; }
    }
}
