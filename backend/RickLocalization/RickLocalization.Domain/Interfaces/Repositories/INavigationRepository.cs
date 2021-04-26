using RickLocalization.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RickLocalization.Domain.Interfaces.Repositories
{
    public interface INavigationRepository
    {
        List<Navigation> GetByRickId(int id);

        Task<string> GetLastDimensionNavigatedByRickId(int id);
    }
}
