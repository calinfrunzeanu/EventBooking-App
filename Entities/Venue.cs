namespace EventBooking.API.Entities
{
    public class Venue
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        
        // Navigation Property: O locatie contine o lista de evenimente
        public ICollection<Event> Events { get; set; } = new List<Event>();
    }
}