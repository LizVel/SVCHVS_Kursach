using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ViewBackend.API.Requests;

namespace ViewBackend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public AuthController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<ActionResult<bool>> LoginAsync([FromBody] UserLoginRequest loginRequest)
        {
            return await _context.Users.AnyAsync(_ =>
                _.Password == loginRequest.Password && _.Username == loginRequest.Username);
        }
    }
}