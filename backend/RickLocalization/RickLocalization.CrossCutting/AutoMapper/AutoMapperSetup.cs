using AutoMapper;
using RickLocalization.Application.Command.RickCreateNavigation;
using RickLocalization.Application.Query.Navigation;
using RickLocalization.Application.Query.Rick;
using RickLocalization.Application.Query.RickDetails;
using RickLocalization.Domain.Entities;

namespace RickLocalization.CrossCutting.AutoMapper
{
    public class AutoMapperSetup : Profile
    {
        public AutoMapperSetup()
        {
            #region CommandToEntity 
            CreateMap<RickCreateNavigationCommandRequest, Navigation>();
            #endregion

            #region EnityToCommand 
            CreateMap<Navigation, RickNavigations>();
            CreateMap<Rick, RickQueryResponse>();
            CreateMap<Rick, RickDetailsQueryResponse>();
            #endregion
        }
    }
}
