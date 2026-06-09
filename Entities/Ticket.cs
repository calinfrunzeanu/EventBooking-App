namespace EventBooking.API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; } = DateTime.UtcNow;
        public decimal Price { get; set; }

        // --- RELATIA CU EVENIMENTUL ---
        public int EventId { get; set; }
        public Event? Event { get; set; }

        // --- RELATIA CU UTILIZATORUL (Cumparatorul) ---
        public int UserId { get; set; }
        public AppUser? User { get; set; }
    }
}