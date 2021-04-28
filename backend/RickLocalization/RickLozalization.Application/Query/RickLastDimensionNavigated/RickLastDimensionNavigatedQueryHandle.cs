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
        private readonly IRepository<Domain.Entities.Rick> _rickRepository;
        public RickLastDimensionNavigatedQueryHandle(INavigationRepository navigationRepository, IRepository<Domain.Entities.Rick> rickRepository)
        {
            _navigationRepository = navigationRepository;
            _rickRepository = rickRepository;
        }

        public async Task<RickLastDimensionNavigatedQueryResponse> Handle(RickLastDimensionNavigatedQueryRequest request, CancellationToken cancellationToken)
        {

            string currentDimension;

            currentDimension = await _navigationRepository.GetLastDimensionNavigatedByRickId(request.RickId);

            if(currentDimension == null)
            {
                 var rick = _rickRepository.GetById(request.RickId);

                currentDimension = rick?.DimensionOriginName;
            }

            var response = new RickLastDimensionNavigatedQueryResponse(currentDimension);

            return response;
        }
    }
}
