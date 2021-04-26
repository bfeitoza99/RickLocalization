using System;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RickLocalization.Application.Query.Rick;
using RickLocalization.Application.Query.RickDetails;

namespace RickLocalization.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RickController : ControllerBase
    {

        [HttpGet]
        [Route("/details/{rickId}")]
        [ProducesResponseType(typeof(RickDetailsQueryResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetById(
                                    [FromServices] IMediator mediator,
                                    [FromServices] ILogger<RickController> _logger,
                                     int rickId)
        {
            try
            {
                _logger.LogInformation($"Get details by rickId: {rickId}");
                var command = new RickDetailsQueryRequest(rickId);
                var result = await mediator.Send(command);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }

        [HttpGet]
        [Route("/rick")]
        [ProducesResponseType(typeof(RickQueryResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get([FromServices] IMediator mediator,
                                 [FromServices] ILogger<RickController> _logger)
        {
            try
            {
                _logger.LogInformation($"Get all Ricks dimension name");

                var command = new RickQueryRequest();
                var result = await mediator.Send(command);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }
    }
}
