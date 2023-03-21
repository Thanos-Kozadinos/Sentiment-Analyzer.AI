using Microsoft.EntityFrameworkCore;
using mlFullStackHackDay.Api.Models;

namespace mlFullStackHackDay.Api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
    {
    }
    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //     var configuration = new ConfigurationBuilder().AddUserSecrets<Program>().Build();
    //     optionsBuilder.UseSqlServer(configuration.GetSection("ConnectionStrings:DefaultConnection").Value);
    // }

    public DbSet<User> Users { get; set; } = default!;
    public DbSet<Sentence> Sentences { get; set; } = default!;
    public DbSet<DataFormFile> Files { get; set; } = default!;
}