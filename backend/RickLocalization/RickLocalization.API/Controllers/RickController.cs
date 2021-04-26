using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RickLocalization.Application.Query.Navigation;

namespace RickLocalization.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RickController : ControllerBase
    {

        [HttpGet]
        [Route("/rick-details")]
        [ProducesResponseType(typeof(RickNavigationsQueryResponse), StatusCodes.Status200OK)]
        public IActionResult Get(
                                    [FromServices] IMediator mediator,
                                    [FromQuery] int rickId)
        {
            try
            {
                var command = new RickNavigationsQueryRequest(rickId);
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
