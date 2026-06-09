namespace EventBooking.API.DTOs
{
    // Asta vom trimite catre Frontend (Angular/React)
    public class EventDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public int Capacity { get; set; }
        
        // Observa magia: Nu trimitem obiectul complet 'Venue', ci doar numele lui!
        public string VenueName { get; set; } = string.Empty; 
    }
}