using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SEDC.NoteApp.CustomExceptions;
using SEDC.NoteApp.DTOs;
using SEDC.NoteApp.Services.Abstraction;
using Serilog;
using XAct;

namespace SEDC.NoteApp.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterUserDto registerUserDto) 
        {
            try
            {
                Log.Information("Procesing registration... Username: '{username}'", registerUserDto.Username);
                Log.Information("Procesing registration...");
                _userService.RegisterUser(registerUserDto);
                Log.Information("User '{firstValue}' registered successfully!", registerUserDto.Username);
                return StatusCode(201, "User created!");
            }
            catch (UserDataException ex) 
            {
                Log.Warning("User registration failed due to data validation. Username: '{Username}'. Message: {Message}", registerUserDto.Username, ex.Message);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error(ex, "An error occurred during user registration! Username: '{Username}'", registerUserDto.Username);
                return StatusCode(500, "An error occurred!");
            }
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginUserDto loginUserDto) 
        {
            try
            {
                Log.Information("Processing login... User: {username}", loginUserDto.Username);
                var token = _userService.LoginUser(loginUserDto);
                Log.Information("User logged in successfully: {Username}", loginUserDto.Username);
                return Ok(new { token });
            }
            catch (UserDataException ex)
            {
                Log.Warning("User login failed due to data validation. Username: '{Username}'. Message: {Message}", loginUserDto.Username, ex.Message);
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                Log.Error(ex, "An error occurred during user login! Username: '{Username}'", loginUserDto.Username);
                return StatusCode(500, "An error occurred!");
            }
        }
    }
}
