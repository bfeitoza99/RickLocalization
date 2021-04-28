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
            
        }

        public DbSet<Rick> Rick { get; set; }
        public DbSet<Navigation> Navigation { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Rick>().HasData(
              new Rick
              {
                  Id = 1,
                  DimensionOriginName = "C-137",
                  Details = "Dimensão de origem de Rick e Morty, a dimensão C-137 é o universo no qual a Terra foi invadida por Cronenbergs",
                  ImgUrl = "http://s2.glbimg.com/fP8FcBdhKXgZ2HCLdGl7R8MIHIk=/e.glbimg.com/og/ed/f/original/2017/10/20/rick-and-morty3.png"
              },
              new Rick
              {
                  Id = 2,
                  DimensionOriginName = "C-132",
                  Details = "A dimensão C-132 é um dos muitos universos no multiverso e foi o universo em que Rick e Morty dos dois primeiros volumes da série de quadrinhos Rick e Morty foram considerados",
                  ImgUrl = "https://sm.ign.com/t/ign_br/news/r/rick-and-m/rick-and-morty-season-5-will-start-this-june_x6qb.1200.jpg"
              },
              new Rick
              {
                  Id = 3,
                  DimensionOriginName = "C-500A",
                  Details = "A dimensão C-500A é uma dimensão alternativa, nesta dimensão, os irmãos Smith, Summer e Morty, nunca nasceram.",
                  ImgUrl = "https://i1.wp.com/arteref.com/wp-content/uploads/2018/04/rick-morty.jpg?fit=900%2C699&ssl=1"
              },
              new Rick
              {
                  Id = 4,
                  DimensionOriginName = "Beta B-45",
                  Details = "Dimensão Beta B-45 é uma realidade alternativa em que bundas são rostos e rostos são bundas.",
                  ImgUrl = "https://wallpaperaccess.com/thumb/85323.png"
              },
              new Rick
              {
                  Id = 5,
                  DimensionOriginName = "C-4499",
                  Details = "A dimensão C-4499 é uma dimensão alternativa onde as pessoas andam para trás.",
                  ImgUrl = "https://static.diario24horas.com.br/images/articles/2020/10/27/31-rick-morty.jpg"
              },
              new Rick
              {
                  Id = 6,
                  DimensionOriginName = "35-C",
                  Details = "A dimensão 35-C consiste em uma versão alternativa e altamente bizarra da Terra que é controlada por incontáveis ​​alienígenas. É um mundo muito colorido cheio de um céu amarelo, nuvens verdes e formações rochosas com olhos.",
                  ImgUrl = "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/rick-morty-cocriador-nova-serie-greci.jpg"
              });

            base.OnModelCreating(modelBuilder);
        }
    }
}
