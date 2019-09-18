using Microsoft.EntityFrameworkCore;

namespace ConferenceBarel.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Conference> Conferences { get; set; }
    }
    protected override void OnConfiguring(DbContextOptionsBuilder opt)
    {
        opt.UseSqlite("Filename=./configbarel.db");
    }
}