using Microsoft.AspNetCore.Identity;

namespace EventBooking.API.Entities
{
    public class AppRole : IdentityRole<int>
    {
        // Clasa de baza contine deja Id si Name ("Admin", "User").
        // O lasam goala momentan, dar e obligatorie ca structura pentru a o lega de AppUser.
    }
}