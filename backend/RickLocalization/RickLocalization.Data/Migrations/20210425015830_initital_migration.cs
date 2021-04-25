using Microsoft.EntityFrameworkCore.Migrations;

namespace RickLocalization.Data.Migrations
{
    public partial class initital_migration : Migration
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
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                columns: new[] { "Id", "Details", "DimensionOriginName" },
                values: new object[] { 1, "Dimensão de origem de Rick e Morty, a dimensão C-137 é o universo no qual a Terra foi invadida por Cronenbergs", "C-137" });

            migrationBuilder.InsertData(
                table: "Rick",
                columns: new[] { "Id", "Details", "DimensionOriginName" },
                values: new object[] { 2, "A dimensão C-132 é um dos muitos universos no multiverso e foi o universo em que Rick e Morty dos dois primeiros volumes da série de quadrinhos Rick e Morty foram considerados", "C-132" });

            migrationBuilder.InsertData(
                table: "Rick",
                columns: new[] { "Id", "Details", "DimensionOriginName" },
                values: new object[] { 3, "A dimensão C-500A é uma dimensão alternativa, nesta dimensão, os irmãos Smith, Summer e Morty, nunca nasceram.", "C-500A" });

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
