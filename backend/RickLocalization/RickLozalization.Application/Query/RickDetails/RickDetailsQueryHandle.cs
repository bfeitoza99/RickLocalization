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
    public class RickDetailsHandle : IRequestHandler<RickDetailsRequest, RickDetailsResponse>
    {
        private readonly IRepository<Rick> _rickRepository;
        public RickDetailsHandle(IRepository<Rick> rickRepository)
        {
            _rickRepository = rickRepository;
        }

        public async Task<RickDetailsResponse> Handle(RickDetailsRequest request, CancellationToken cancellationToken)
        {
            var response = new RickDetailsResponse();

            var rickDetails = _rickRepository.GetById(request.RickId);



            return response;
        }
    }
}
