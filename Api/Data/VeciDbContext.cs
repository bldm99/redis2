
// En algún lugar de tu proyecto Api
using Api.Models;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Api.Data;

public class VeciDbContext : DbContext
{
    
    public VeciDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<Vecino> Vecinos { get; set; }
}
