using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Domain.Interfaces.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity GetById(int id);
        IEnumerable<TEntity> GetAll();
        void Save(TEntity entity);
    }
}
