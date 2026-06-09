using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using EventBooking.API.Entities;

namespace EventBooking.API.Data
{
    // Mostenim IdentityDbContext pentru a aduce automat tabelele de securitate (Users, Roles)
    // Specificam explicit clasele noastre (AppUser, AppRole) si tipul cheii primare (int)
    public class ApplicationDbContext : IdentityDbContext<AppUser, AppRole, int>
    {
        // Constructorul care primeste optiunile de conectare din exterior (Program.cs)
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // DbSets - Acestea vor deveni tabelele fizice in baza de date
        public DbSet<Event> Events { get; set; }
        public DbSet<Venue> Venues { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Category> Categories { get; set; }

        // Metoda unde putem suprascrie regulile de creare a bazei de date (Fluent API)
        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Aceasta linie este absolut obligatorie pentru ca tabelele de Identity sa fie generate corect!
            base.OnModelCreating(builder);
        }
    }
}