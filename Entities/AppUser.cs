using Microsoft.AspNetCore.Identity;

namespace EventBooking.API.Entities
{
    // <int> ii spune framework-ului ca Id-ul sa fie de tip int, nu string (cum e default)
    public class AppUser : IdentityUser<int>
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;

        // Navigation Property: Un utilizator poate cumpara/detine mai multe bilete (One-to-Many)
        public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}