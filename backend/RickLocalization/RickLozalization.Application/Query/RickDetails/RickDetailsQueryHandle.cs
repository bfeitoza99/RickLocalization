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
        public RickDetailsQueryHandle(IRepository<Domain.Entities.Rick> rickRepository)
        {
            _rickRepository = rickRepository;
        }

        public async Task<RickDetailsQueryResponse> Handle(RickDetailsQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickDetailsQueryResponse();

            var rickDetails = _rickRepository.GetById(request.RickId);



            return response;
        }
    }
}
