using RickLocalization.Domain.Entities;
using RickLocalization.Domain.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace RickLocalization.Data.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {

        protected readonly RickLocalizationContext _context;
        public Repository(RickLocalizationContext context)
        {
            _context = context;
        }
        public virtual TEntity GetById(int id)
        {
            var query = _context.Set<TEntity>().Where(e => e.Id == id);
            if (query.Any())
                return query.FirstOrDefault();
            return null;
        }
        public virtual IEnumerable<TEntity> GetAll()
        {
            var query = _context.Set<TEntity>();
            if (query.Any())
                return query.ToList();
            return new List<TEntity>();
        }
        public virtual void Save(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
        }
    }
}
