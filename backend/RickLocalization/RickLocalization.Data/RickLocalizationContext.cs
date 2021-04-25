using Microsoft.EntityFrameworkCore;
using RickLocalization.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Data
{
    public class RickLocalizationContext : DbContext
    {
        public RickLocalizationContext(DbContextOptions<RickLocalizationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Rick> RickDimension { get; set; }
        public DbSet<Navigation> Navigation { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
