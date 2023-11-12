
// En algún lugar de tu proyecto Api
using Api.Models;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Api.Data;
/*public class ApplicationDbContext : DbContext
{
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<Cosenos> Cosenos { get; set; }
}

namespace Api.Data;*/
public class ApplicationDbContext : DbContext
{
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<User> Users { get; set; }
}
