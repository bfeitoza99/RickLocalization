using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.RickDetails
{
    public class RickDetailsQueryRequest : IRequest<RickDetailsQueryResponse>
    {
        public RickDetailsQueryRequest(int rickId)
        {
            RickId = rickId;
        }

        public int RickId { get; set; }
    }
}
