using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.RickLastDimensionNavigated
{
    public class RickLastDimensionNavigatedRequest : IRequest<RickLastDimensionNavigatedResponse>
    {
        public RickLastDimensionNavigatedRequest(int rickId)
        {
            RickId = rickId;
        }
        public int RickId { get; set; }
    }
}
