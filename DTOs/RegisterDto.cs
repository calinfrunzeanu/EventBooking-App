using System.ComponentModel.DataAnnotations;

namespace EventBooking.API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Prenumele este obligatoriu.")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Numele este obligatoriu.")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email-ul este obligatoriu.")]
        [EmailAddress(ErrorMessage = "Format email invalid.")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Parola este obligatorie.")]
        [MinLength(6, ErrorMessage = "Parola trebuie sa aiba minim 6 caractere.")]
        public string Password { get; set; } = string.Empty;
    }
}
