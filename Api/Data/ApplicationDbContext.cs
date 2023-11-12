
// En algún lugar de tu proyecto Api
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;
public class ApplicationDbContext : DbContext
{
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<Cosenos> Cosenos { get; set; }
}
