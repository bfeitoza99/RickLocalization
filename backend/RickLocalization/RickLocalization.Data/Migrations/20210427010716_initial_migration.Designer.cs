﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RickLocalization.Data;

namespace RickLocalization.Data.Migrations
{
    [DbContext(typeof(RickLocalizationContext))]
    [Migration("20210427010716_initial_migration")]
    partial class initial_migration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RickLocalization.Domain.Entities.Navigation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DimensionDestiny")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DimensionOrigin")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RickId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RickId");

                    b.ToTable("Navigation");
                });

            modelBuilder.Entity("RickLocalization.Domain.Entities.Rick", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DimensionOriginName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Rick");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Details = "Dimensão de origem de Rick e Morty, a dimensão C-137 é o universo no qual a Terra foi invadida por Cronenbergs",
                            DimensionOriginName = "C-137",
                            ImgUrl = "http://s2.glbimg.com/fP8FcBdhKXgZ2HCLdGl7R8MIHIk=/e.glbimg.com/og/ed/f/original/2017/10/20/rick-and-morty3.png"
                        },
                        new
                        {
                            Id = 2,
                            Details = "A dimensão C-132 é um dos muitos universos no multiverso e foi o universo em que Rick e Morty dos dois primeiros volumes da série de quadrinhos Rick e Morty foram considerados",
                            DimensionOriginName = "C-132",
                            ImgUrl = "https://sm.ign.com/t/ign_br/news/r/rick-and-m/rick-and-morty-season-5-will-start-this-june_x6qb.1200.jpg"
                        },
                        new
                        {
                            Id = 3,
                            Details = "A dimensão C-500A é uma dimensão alternativa, nesta dimensão, os irmãos Smith, Summer e Morty, nunca nasceram.",
                            DimensionOriginName = "C-500A",
                            ImgUrl = "https://i1.wp.com/arteref.com/wp-content/uploads/2018/04/rick-morty.jpg?fit=900%2C699&ssl=1"
                        },
                        new
                        {
                            Id = 4,
                            Details = "Dimensão Beta B-45 é uma realidade alternativa em que bundas são rostos e rostos são bundas.",
                            DimensionOriginName = "Beta B-45",
                            ImgUrl = "https://wallpaperaccess.com/thumb/85323.png"
                        },
                        new
                        {
                            Id = 5,
                            Details = "A dimensão C-4499 é uma dimensão alternativa onde as pessoas andam para trás.",
                            DimensionOriginName = "C-4499",
                            ImgUrl = "https://static.diario24horas.com.br/images/articles/2020/10/27/31-rick-morty.jpg"
                        },
                        new
                        {
                            Id = 6,
                            Details = "A dimensão 35-C consiste em uma versão alternativa e altamente bizarra da Terra que é controlada por incontáveis ​​alienígenas. É um mundo muito colorido cheio de um céu amarelo, nuvens verdes e formações rochosas com olhos.",
                            DimensionOriginName = "35-C",
                            ImgUrl = "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/rick-morty-cocriador-nova-serie-greci.jpg"
                        });
                });

            modelBuilder.Entity("RickLocalization.Domain.Entities.Navigation", b =>
                {
                    b.HasOne("RickLocalization.Domain.Entities.Rick", "Rick")
                        .WithMany("Navigations")
                        .HasForeignKey("RickId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Rick");
                });

            modelBuilder.Entity("RickLocalization.Domain.Entities.Rick", b =>
                {
                    b.Navigation("Navigations");
                });
#pragma warning restore 612, 618
        }
    }
}