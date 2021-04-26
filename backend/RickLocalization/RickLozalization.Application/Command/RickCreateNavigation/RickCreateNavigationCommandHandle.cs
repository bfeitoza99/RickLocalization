using MediatR;
using RickLocalization.Domain.Entities;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace RickLocalization.Application.Command.RickCreateNavigation
{
    public class RickCreateNavigationCommandHandle :  IRequestHandler<RickCreateNavigationCommandRequest, RickCreateNavigationCommandResponse>
    {
        private readonly IRepository<Navigation> _navigationRepository;
        private readonly IUnitOfWork _unitOfWork;
        public RickCreateNavigationCommandHandle(IRepository<Navigation> navigationRepository, IUnitOfWork unitOfWork)
        {
            _navigationRepository = navigationRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<RickCreateNavigationCommandResponse> Handle(RickCreateNavigationCommandRequest request, CancellationToken cancellationToken)
        {
            var response = new RickCreateNavigationCommandResponse();

            var navigation = new Navigation();

             _navigationRepository.Save(navigation);

            await _unitOfWork.Commit();

            return response;
        }
    }
}
