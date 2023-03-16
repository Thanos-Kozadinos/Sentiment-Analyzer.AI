using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mlFullStackHackDay.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddProbability : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Probability",
                table: "Sentences",
                type: "real",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Probability",
                table: "Sentences");
        }
    }
}
