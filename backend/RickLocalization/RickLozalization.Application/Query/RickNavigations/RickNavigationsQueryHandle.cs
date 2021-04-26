using AutoMapper;
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
        private readonly IMapper _mapper;
        public RickNavigationsQueryHandle(INavigationRepository navigationRepository, IMapper mapper)
        {
            _navigationRepository = navigationRepository;
            _mapper = mapper;
        }

        public async Task<RickNavigationsQueryResponse> Handle(RickNavigationsQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickNavigationsQueryResponse(request.RickId);

            var navigations = await _navigationRepository.GetByRickId(request.RickId);

            response.Navigations = _mapper.Map<List<RickNavigations>>(navigations);

            return response;
        }
    }
}
