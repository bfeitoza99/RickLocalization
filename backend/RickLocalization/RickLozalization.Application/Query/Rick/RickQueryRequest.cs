using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.Rick
{
    public class RickQueryRequest : IRequest<RickQueryResponse>
    {
        public RickQueryRequest()
        {

        }
    }
}
