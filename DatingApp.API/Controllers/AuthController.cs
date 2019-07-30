using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Moduls;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]

        public async Task<IActionResult> Register(UserForRegisterDtos userForRegisterDtos)
        {
            //validate request
            userForRegisterDtos.Username =  userForRegisterDtos.Username.ToLower();

            if (await _repo.UserExists(userForRegisterDtos.Username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Username = userForRegisterDtos.Username
            };
            var createdUser = await _repo.Register(userToCreate, userForRegisterDtos.Password);

            return StatusCode(201);
        }
    }
}