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
    public class EventsController : ControllerBase
    {
      private readonly ApplicationDbContext _context;

        public EventsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventDto>>> GetAll()
        {
            var events = await _context.Events.Include(e => e.Venue).ToListAsync();
            var dtos = events.Select(e => new EventDto
            {
               Id = e.Id,
               Title = e.Title,
               Description = e.Description,
               Date = e.Date,
               Capacity = e.Capacity,
               VenueName = e.Venue?.Name ?? "Locatie Necunoscuta"
            });
            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EventDto>> GetById(int id)
        {
            var e = await _context.Events.Include(ev => ev.Venue).FirstOrDefaultAsync(ev => ev.Id == id);
            if (e == null) return NotFound(new { error = "Eveniment negasit" });
            
            var dto = new EventDto
            {
                Id = e.Id,
                Title = e.Title,
                Description = e.Description,
                Date = e.Date,
                Capacity = e.Capacity,
                VenueName = e.Venue?.Name ?? "Locatie Necunoscuta"
            };
            return Ok(dto);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<EventDto>> Create([FromBody] CreateEventDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var newEvent = new Event
            {
                Title = dto.Title,
                Description = dto.Description,
                Date = dto.Date,
                Capacity = dto.Capacity,
                VenueId = dto.VenueId
            };

            await _context.Events.AddAsync(newEvent);
            await _context.SaveChangesAsync();

            var createdDto = new EventDto
            {
                Id = newEvent.Id,
                Title = newEvent.Title,
                Description = newEvent.Description,
                Date = newEvent.Date,
                Capacity = newEvent.Capacity,
                VenueName = "Locatia se va incarca la refresh"
            };

            return CreatedAtAction(nameof(GetById), new { id = createdDto.Id }, createdDto);
        }
    }
}
