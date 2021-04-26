using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace RickLocalization.Data.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly RickLocalizationContext _context;

        public UnitOfWork(RickLocalizationContext context)
        {
            _context = context;
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
    }
}
