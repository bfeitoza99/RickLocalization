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
        public RickQueryHandle(IRepository<Domain.Entities.Rick> rickRepository)
        {
            _rickRepository = rickRepository;
        }

        public async Task<RickQueryResponse> Handle(RickQueryRequest request, CancellationToken cancellationToken)
        {
            var response = new RickQueryResponse();

            var rickDetails = _rickRepository.GetAll();



            return response;
        }
    }
}
