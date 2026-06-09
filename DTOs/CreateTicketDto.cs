using System.ComponentModel.DataAnnotations;

namespace EventBooking.API.DTOs
{
    public class CreateTicketDto
    {
        [Required(ErrorMessage = "EventId este obligatoriu.")]
        public int EventId { get; set; }

        [Required(ErrorMessage = "UserId este obligatoriu.")]
        public int UserId { get; set; }

        [Range(0.01, 10000, ErrorMessage = "Pretul trebuie sa fie intre 0.01 si 10000.")]
        public decimal Price { get; set; }
    }
}
