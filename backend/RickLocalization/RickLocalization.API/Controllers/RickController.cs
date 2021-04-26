using System;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RickLocalization.Application.Query.RickDetails;

namespace RickLocalization.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RickController : ControllerBase
    {

        [HttpGet]
        [Route("/rick-details")]
        [ProducesResponseType(typeof(RickDetailsQueryResponse), StatusCodes.Status200OK)]
        public IActionResult Get(
                                    [FromServices] IMediator mediator,
                                    [FromQuery] int rickId)
        {
            try
            {
                var command = new RickDetailsQueryRequest(rickId);
                var result = mediator.Send(command);
                return Ok(result);
            }
            catch (Exception)
            {

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }
    }
}
