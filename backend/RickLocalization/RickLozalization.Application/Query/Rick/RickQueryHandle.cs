using AutoMapper;
using MediatR;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Query.Rick
{
    public class RickQueryHandle : IRequestHandler<RickQueryRequest, RickQueryResponse>
    {
        private readonly IRepository<Domain.Entities.Rick> _rickRepository;
        private readonly IMapper _mapper;
        public RickQueryHandle(IRepository<Domain.Entities.Rick> rickRepository, IMapper mapper)
        {
            _rickRepository = rickRepository;
            _mapper = mapper;
        }

        public async Task<RickQueryResponse> Handle(RickQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickQueryResponse();

            var ricks = _rickRepository.GetAll();

            response.Ricks = _mapper.Map<List<RickResponse>>(ricks);

            return response;
        }
    }
}
