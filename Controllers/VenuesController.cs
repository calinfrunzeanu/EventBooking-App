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
    public class VenuesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VenuesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VenueDto>>> GetAll()
        {
            var venues = await _context.Venues.ToListAsync();
            var dtos = venues.Select(v => new VenueDto
            {
                Id = v.Id,
                Name = v.Name,
                Address = v.Address
            });
            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VenueDto>> GetById(int id)
        {
           var v = await _context.Venues.FindAsync(id);
           if (v == null) return NotFound(new { error = "Locatie negasita" });

           var dto = new VenueDto
           {
               Id = v.Id,
               Name = v.Name,
               Address = v.Address
           };
           return Ok(dto);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<VenueDto>> Create([FromBody] CreateVenueDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var venue = new Venue
            {
                Name = dto.Name,
                Address = dto.Address
            };

            await _context.Venues.AddAsync(venue);
            await _context.SaveChangesAsync();

            var venueDto = new VenueDto
            {
                Id = venue.Id,
                Name = venue.Name,
                Address = venue.Address
            };

            return CreatedAtAction(nameof(GetById), new { id = venue.Id }, venueDto);
        }
    }
}
