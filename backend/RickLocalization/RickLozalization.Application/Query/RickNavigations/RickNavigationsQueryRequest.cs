using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.Navigation
{
    public class RickNavigationsQueryRequest : IRequest<RickNavigationsQueryResponse>
    {
        public RickNavigationsQueryRequest(int rickId)
        {
            RickId = rickId;
        }
        public int RickId { get; set; }
    }
}
