using AutoMapper;
using MediatR;
using RickLocalization.Domain.Entities;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.RickDetails
{
    public class RickDetailsQueryHandle : IRequestHandler<RickDetailsQueryRequest, RickDetailsQueryResponse>
    {
        private readonly IRepository<Domain.Entities.Rick> _rickRepository;
        private readonly IMapper _mapper;
        public RickDetailsQueryHandle(IRepository<Domain.Entities.Rick> rickRepository, IMapper mapper)
        {
            _rickRepository = rickRepository;
            _mapper = mapper;
        }

        public async Task<RickDetailsQueryResponse> Handle(RickDetailsQueryRequest request, CancellationToken cancellationToken)
        {
            
            var rickDetails = _rickRepository.GetById(request.RickId);

            if (rickDetails == null)
            {
                return new RickDetailsQueryResponse();
            }

            var response = _mapper.Map<RickDetailsQueryResponse>(rickDetails);

            return response;
        }
    }
}
