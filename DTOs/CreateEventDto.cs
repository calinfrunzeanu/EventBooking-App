namespace EventBooking.API.DTOs
{
    // Asta primim de la Frontend cand utilizatorul completeaza formularul de adaugare
    public class CreateEventDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public int Capacity { get; set; }
        public int VenueId { get; set; } // Avem nevoie doar de ID-ul locatiei unde se va tine
    }
}