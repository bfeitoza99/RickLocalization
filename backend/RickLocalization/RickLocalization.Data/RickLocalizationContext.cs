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
            //Database.EnsureCreated();
        }

        public DbSet<Rick> Rick { get; set; }
        public DbSet<Navigation> Navigation { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Rick>().HasData(
              new Rick { Id = 1, DimensionOriginName = "C-137", Details = "Dimensão de origem de Rick e Morty, a dimensão C-137 é o universo no qual a Terra foi invadida por Cronenbergs" },
              new Rick { Id = 2, DimensionOriginName = "C-132", Details = "A dimensão C-132 é um dos muitos universos no multiverso e foi o universo em que Rick e Morty dos dois primeiros volumes da série de quadrinhos Rick e Morty foram considerados" },
              new Rick { Id = 3, DimensionOriginName = "C-500A", Details = "A dimensão C-500A é uma dimensão alternativa, nesta dimensão, os irmãos Smith, Summer e Morty, nunca nasceram." });

            base.OnModelCreating(modelBuilder);
        }
    }
}
