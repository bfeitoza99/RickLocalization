using AutoMapper;
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
    public class RickCreateNavigationCommandHandle : IRequestHandler<RickCreateNavigationCommandRequest, RickCreateNavigationCommandResponse>
    {
        private readonly IRepository<Navigation> _navigationRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public RickCreateNavigationCommandHandle(IRepository<Navigation> navigationRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _navigationRepository = navigationRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<RickCreateNavigationCommandResponse> Handle(RickCreateNavigationCommandRequest request, CancellationToken cancellationToken)
        {
            
            var navigation = _mapper.Map<Navigation>(request);

            _navigationRepository.Save(navigation);

            await _unitOfWork.Commit();          

            var response = new RickCreateNavigationCommandResponse(true);

            return response;

        }
    }
}
