using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.Navigation
{
    public class NavigationQueryHandle : IRequestHandler<NavigationQueryRequest, NavigationQueryResponse>
    {
        public async Task<NavigationQueryResponse> Handle(NavigationQueryRequest request, CancellationToken cancellationToken)
        {
            return new NavigationQueryResponse();
        }
    }
}
