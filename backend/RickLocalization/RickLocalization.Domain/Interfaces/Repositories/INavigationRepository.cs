using RickLocalization.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Domain.Interfaces.Repositories
{
    public interface INavigationRepository
    {
        List<Navigation> GetByRickId(int id);
    }
}
