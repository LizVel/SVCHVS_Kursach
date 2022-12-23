using Microsoft.EntityFrameworkCore;
using ViewBackend.API.Models;

namespace ViewBackend.API;

public class ApplicationContext : DbContext
{
    public DbSet<Story> Stories { get; set; }

    public DbSet<User> Users { get; set; }
    
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options)
    {
        Database.EnsureCreated();
    }
}