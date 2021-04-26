using Microsoft.Extensions.DependencyInjection;
using RickLocalization.Data.Repositories;
using RickLocalization.Domain.Entities;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.CrossCutting.DependencyInjection
{
    public static class RepositoryDependencyInjection
    {
        public static  IServiceCollection  AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IRepository<Navigation>, NavigationRepository>();
            services.AddTransient<INavigationRepository, NavigationRepository>();
            services.AddTransient<IRepository<Rick>, RickRepository>();
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));


            return services;
        }
    }
}
