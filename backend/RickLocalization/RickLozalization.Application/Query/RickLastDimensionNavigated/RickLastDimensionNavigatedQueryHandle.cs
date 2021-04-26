using MediatR;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.RickLastDimensionNavigated
{
    public class RickLastDimensionNavigatedQueryHandle : IRequestHandler<RickLastDimensionNavigatedQueryRequest, RickLastDimensionNavigatedQueryResponse>
    {
        private readonly INavigationRepository _navigationRepository;
        public RickLastDimensionNavigatedQueryHandle(INavigationRepository navigationRepository)
        {
            _navigationRepository = navigationRepository;
        }

        public async Task<RickLastDimensionNavigatedQueryResponse> Handle(RickLastDimensionNavigatedQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickLastDimensionNavigatedQueryResponse();

            var navigations = await _navigationRepository.GetLastDimensionNavigatedByRickId(request.RickId);



            return response;
        }
    }
}
