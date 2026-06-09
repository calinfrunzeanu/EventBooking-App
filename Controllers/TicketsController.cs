using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EventBooking.API.Data;
using EventBooking.API.DTOs;
using EventBooking.API.Entities;

namespace EventBooking.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TicketsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<TicketDto>> Purchase([FromBody] CreateTicketDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var eventEntity = await _context.Events.FindAsync(dto.EventId);
            if(eventEntity == null) return NotFound(new { error = "Eveniment negasit" });

            var ticket = new Ticket
            {
                EventId = dto.EventId,
                UserId = dto.UserId,
                Price = dto.Price,
                PurchaseDate = DateTime.UtcNow
            };

            await _context.Tickets.AddAsync(ticket);
            await _context.SaveChangesAsync();

            var ticketDto = new TicketDto
            {
                Id = ticket.Id,
                PurchaseDate = ticket.PurchaseDate,
                Price = ticket.Price,
                EventId = ticket.EventId,
                EventTitle = eventEntity.Title,
                UserId = ticket.UserId
            };

            return CreatedAtAction(nameof(Purchase), new { id = ticket.Id }, ticketDto);
        }
    }
}
