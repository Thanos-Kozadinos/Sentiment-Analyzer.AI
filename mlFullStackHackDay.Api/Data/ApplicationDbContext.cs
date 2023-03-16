using Microsoft.EntityFrameworkCore;
using mlFullStackHackDay.Api.Models;

namespace mlFullStackHackDay.Api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = default!;
    public DbSet<Sentence> Sentences { get; set; } = default!;
    public DbSet<DataFormFile> Files { get; set; } = default!;
}