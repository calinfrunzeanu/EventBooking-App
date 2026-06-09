namespace EventBooking.API.Entities
{
    public class Event
    {
        public int Id { get; set; } 
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public int Capacity { get; set; }

        // --- RELATIA ONE-TO-MANY CU VENUE ---
        // Foreign Key (Cheia straina care retine Id-ul locatiei)
        public int VenueId { get; set; }
        // Navigation Property (Obiectul efectiv, ca sa poti accesa event.Venue.Name in cod)
        public Venue? Venue { get; set; } 

        // --- RELATIA MANY-TO-MANY CU CATEGORY ---
        // Lista de categorii asociate acestui eveniment
        public ICollection<Category> Categories { get; set; } = new List<Category>();

        public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}