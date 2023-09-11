using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SEDC.NoteApp.CustomExceptions;
using SEDC.NoteApp.DTOs;
using SEDC.NoteApp.Services.Abstraction;
using Serilog;
using System.Security.Claims;

namespace SEDC.NoteApp.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteService _noteService;
        // default logger 
        private readonly ILogger<NotesController> _logger;

        public NotesController(INoteService noteService, ILogger<NotesController> logger)
        {   
            _noteService = noteService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                Log.Information("User is requesting data");
                var userId = User.FindFirstValue("userId");
                var username = User.FindFirstValue(ClaimTypes.Name);

                return Ok(_noteService.GetAllNotes(int.Parse(userId)));
            }
            catch (Exception ex)
            {
                //_logger.LogError($"Something went wrong: {ex.Message}");
                Log.Error($"Something went wrong: {ex.Message}");
                return StatusCode(500, "System error occurred, contact admin!");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            try
            {
                var noteDto = _noteService.GetById(id);
                return Ok(noteDto);
            }
            catch (NoteDataException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                //log
                return StatusCode(500, "System error occurred, contact admin!");
            }
        }

        [HttpPost]
        public IActionResult AddNote([FromBody] AddNoteDto addNoteDto)
        {
            try
            {
                _noteService.AddNote(addNoteDto);
                return StatusCode(201, "Note Added!");
            }
            catch (NoteDataException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                //log
                return StatusCode(500, "System error occurred, contact admin!");
            }
        }

        [HttpPut]
        public IActionResult UpdateNote([FromBody] UpdateNoteDto updateNoteDto)
        {
            try
            {
                _noteService.UpdateNote(updateNoteDto);
                return Ok("Note updated");
            }
            catch (NoteDataException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                //log
                return StatusCode(500, "System error occurred, contact admin!");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteNote([FromRoute] int id)
        {
            try
            {
                _noteService.DeleteNote(id);
                return Ok("Note deleted!");
            }
            catch (NoteDataException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                //log
                return StatusCode(500, "System error occurred, contact admin!");
            }
        }
    }
}
