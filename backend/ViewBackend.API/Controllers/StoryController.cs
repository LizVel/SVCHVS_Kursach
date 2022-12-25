using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ViewBackend.API.Requests;

namespace ViewBackend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoryController : ControllerBase
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public StoryController(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("byType/{type}")]
        public async Task<ActionResult<List<ShortStoryInfo>>> GetAllByTypeAsync([FromRoute] string type)
        {
            return await _context.Stories
                .Where(_ => _.Type == type)
                .ProjectTo<ShortStoryInfo>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FullStoryInfo>> GetByIdAsync([FromRoute] Guid id)
        {
            return await _context.Stories
                .Where(_ => _.Id == id)
                .ProjectTo<FullStoryInfo>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync() ?? throw new InvalidOperationException();
        }
    }
}