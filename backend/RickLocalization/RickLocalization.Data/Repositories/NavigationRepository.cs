using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.Entities;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RickLocalization.Data.Repositories
{
    public class NavigationRepository : Repository<Navigation>, INavigationRepository 
    {       
        public NavigationRepository(RickLocalizationContext context) : base(context)
        {
            
        }

        public List<Navigation>  GetByRickId(int id)
        {
            var query = _context.Navigation.Where(x => x.RickId == id);
            if (query.Any())
                return query.ToList();
            return null;
        }

        public async Task<string> GetLastDimensionNavigatedByRickId(int id)
        {
            var lastNavigation = await _context.Navigation.Where(x => x.RickId == id).OrderByDescending(y => y.RickId).FirstOrDefaultAsync();

            if (lastNavigation != null)
                return lastNavigation.DimensionDestiny;

            return null;
        }
    }
}
