using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.RickLastDimensionNavigated
{
    public class RickLastDimensionNavigatedQueryRequest : IRequest<RickLastDimensionNavigatedQueryResponse>
    {
        public RickLastDimensionNavigatedQueryRequest(int rickId)
        {
            RickId = rickId;
        }
        public int RickId { get; set; }
    }
}
