using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.Navigation
{
    public class NavigationQueryRequest : IRequest<NavigationQueryResponse>
    {
        public int RickId { get; set; }
    }
}
