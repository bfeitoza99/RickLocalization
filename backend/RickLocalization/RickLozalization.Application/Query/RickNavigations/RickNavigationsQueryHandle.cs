using MediatR;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.Navigation
{
    public class RickNavigationsQueryHandle : IRequestHandler<RickNavigationsQueryRequest, RickNavigationsQueryResponse>
    {

        private readonly INavigationRepository _navigationRepository;
        public RickNavigationsQueryHandle(INavigationRepository navigationRepository)
        {
            _navigationRepository = navigationRepository;
        }

        public async Task<RickNavigationsQueryResponse> Handle(RickNavigationsQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickNavigationsQueryResponse(request.RickId);

            var navigations = _navigationRepository.GetByRickId(request.RickId);

            

            return response;
        }
    }
}
