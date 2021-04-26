using RickLocalization.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Data.Repositories
{
    public class RickRepository : Repository<Rick>
    {       
        public RickRepository(RickLocalizationContext context): base(context)
        {
        }
    }
}
