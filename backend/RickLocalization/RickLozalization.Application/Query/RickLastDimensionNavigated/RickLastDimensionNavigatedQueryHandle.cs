using MediatR;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.RickLastDimensionNavigated
{
    public class RickLastDimensionNavigatedHandle : IRequestHandler<RickLastDimensionNavigatedRequest, RickLastDimensionNavigatedResponse>
    {
        private readonly INavigationRepository _navigationRepository;
        public RickLastDimensionNavigatedHandle(INavigationRepository navigationRepository)
        {
            _navigationRepository = navigationRepository;
        }

        public async Task<RickLastDimensionNavigatedResponse> Handle(RickLastDimensionNavigatedRequest request, CancellationToken cancellationToken)
        {
            var response = new RickLastDimensionNavigatedResponse();

            var navigations = await _navigationRepository.GetLastDimensionNavigatedByRickId(request.RickId);



            return response;
        }
    }
}
