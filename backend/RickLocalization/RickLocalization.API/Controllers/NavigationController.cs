using System;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RickLocalization.Application.Command.RickCreateNavigation;
using RickLocalization.Application.Query.Navigation;
using RickLocalization.Application.Query.RickLastDimensionNavigated;

namespace RickLocalization.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NavigationController : ControllerBase
    {

        [HttpGet]
        [Route("/rick-navigations")]
        [ProducesResponseType(typeof(RickNavigationsQueryResponse), StatusCodes.Status200OK)]
        public IActionResult GetNavigationsByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    [FromQuery] int rickId)
        {
            try
            {
               var  Message = $"About page visited at {DateTime.UtcNow.ToLongTimeString()}";
                _logger.LogInformation(Message);
                var command = new RickNavigationsQueryRequest(rickId);
                var result = mediator.Send(command);
                return Ok(result);
            }
            catch (Exception)
            {

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }


        [HttpGet]
        [Route("/last-navigation")]
        [ProducesResponseType(typeof(RickLastDimensionNavigatedQueryResponse), StatusCodes.Status200OK)]
        public IActionResult GetLastNavigationByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    [FromQuery] int rickId)
        {
            try
            {
                var Message = $"About page visited at {DateTime.UtcNow.ToLongTimeString()}";
                _logger.LogInformation(Message);
                var command = new RickLastDimensionNavigatedQueryRequest(rickId);
                var result = mediator.Send(command);
                return Ok(result);
            }
            catch (Exception)
            {

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("/create")]
        [ProducesResponseType(typeof(RickCreateNavigationCommandResponse), StatusCodes.Status200OK)]
        public IActionResult GetLastNavigationByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    [FromBody] RickCreateNavigationCommandRequest navigation)
        {
            try
            {
                var Message = $"About page visited at {DateTime.UtcNow.ToLongTimeString()}";
                _logger.LogInformation(Message);
                var result = mediator.Send(navigation);
                return Ok(result);
            }
            catch (Exception)
            {

                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }


    }
}
