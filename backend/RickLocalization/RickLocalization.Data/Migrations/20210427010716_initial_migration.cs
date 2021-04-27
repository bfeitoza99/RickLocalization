using Microsoft.EntityFrameworkCore.Migrations;

namespace RickLocalization.Data.Migrations
{
    public partial class initial_migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rick",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DimensionOriginName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rick", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Navigation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DimensionOrigin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DimensionDestiny = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RickId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Navigation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Navigation_Rick_RickId",
                        column: x => x.RickId,
                        principalTable: "Rick",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Rick",
                columns: new[] { "Id", "Details", "DimensionOriginName", "ImgUrl" },
                values: new object[,]
                {
                    { 1, "Dimensão de origem de Rick e Morty, a dimensão C-137 é o universo no qual a Terra foi invadida por Cronenbergs", "C-137", "http://s2.glbimg.com/fP8FcBdhKXgZ2HCLdGl7R8MIHIk=/e.glbimg.com/og/ed/f/original/2017/10/20/rick-and-morty3.png" },
                    { 2, "A dimensão C-132 é um dos muitos universos no multiverso e foi o universo em que Rick e Morty dos dois primeiros volumes da série de quadrinhos Rick e Morty foram considerados", "C-132", "https://sm.ign.com/t/ign_br/news/r/rick-and-m/rick-and-morty-season-5-will-start-this-june_x6qb.1200.jpg" },
                    { 3, "A dimensão C-500A é uma dimensão alternativa, nesta dimensão, os irmãos Smith, Summer e Morty, nunca nasceram.", "C-500A", "https://i1.wp.com/arteref.com/wp-content/uploads/2018/04/rick-morty.jpg?fit=900%2C699&ssl=1" },
                    { 4, "Dimensão Beta B-45 é uma realidade alternativa em que bundas são rostos e rostos são bundas.", "Beta B-45", "https://wallpaperaccess.com/thumb/85323.png" },
                    { 5, "A dimensão C-4499 é uma dimensão alternativa onde as pessoas andam para trás.", "C-4499", "https://static.diario24horas.com.br/images/articles/2020/10/27/31-rick-morty.jpg" },
                    { 6, "A dimensão 35-C consiste em uma versão alternativa e altamente bizarra da Terra que é controlada por incontáveis ​​alienígenas. É um mundo muito colorido cheio de um céu amarelo, nuvens verdes e formações rochosas com olhos.", "35-C", "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/rick-morty-cocriador-nova-serie-greci.jpg" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Navigation_RickId",
                table: "Navigation",
                column: "RickId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Navigation");

            migrationBuilder.DropTable(
                name: "Rick");
        }
    }
}
