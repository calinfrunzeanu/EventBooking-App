namespace EventBooking.API.DTOs
{
    public class TicketDto
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal Price { get; set; }
        public int EventId { get; set; }
        public string EventTitle { get; set; } = string.Empty;
        public int UserId { get; set; }
    }
}
