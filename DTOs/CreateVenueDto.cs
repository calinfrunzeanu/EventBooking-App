using System.ComponentModel.DataAnnotations;

namespace EventBooking.API.DTOs
{
    public class CreateVenueDto
    {
        [Required(ErrorMessage = "Numele locatiei este obligatoriu.")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Adresa locatiei este obligatorie.")]
        public string Address { get; set; } = string.Empty;
    }
}
