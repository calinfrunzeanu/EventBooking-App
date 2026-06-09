namespace EventBooking.API.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // Navigation Property: O categorie are o lista de evenimente
        public ICollection<Event> Events { get; set; } = new List<Event>();
    }
}