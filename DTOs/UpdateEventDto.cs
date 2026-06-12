using System.ComponentModel.DataAnnotations;

namespace EventBooking.API.DTOs
{
    public class UpdateEventDto
    {
        [Required]
        [StringLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [StringLength(1000)]
        public string Description { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [Range(1, 10000)]
        public int Capacity { get; set; }

        [Required]
        public int VenueId { get; set; }
    }
}
