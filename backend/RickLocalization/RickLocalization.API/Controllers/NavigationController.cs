using System;
using System.Threading.Tasks;
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
        [Route("/navigations/{rickId}")]
        [ProducesResponseType(typeof(RickNavigationsQueryResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetNavigationsByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    int rickId)
        {
            try
            {
                _logger.LogInformation($"Get all navigation by rickId: {rickId}");
                var command = new RickNavigationsQueryRequest(rickId);
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
        [Route("/last-navigation/{rickId}")]
        [ProducesResponseType(typeof(RickLastDimensionNavigatedQueryResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetLastNavigationByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    int rickId)
        {
            try
            {
                _logger.LogInformation($"Get last navigation by rickId: {rickId}");
                var command = new RickLastDimensionNavigatedQueryRequest(rickId);
                var result = await mediator.Send(command);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
                return BadRequest(StatusCodes.Status400BadRequest);
            }
        }

        [HttpPost]
        [Route("/create")]
        [ProducesResponseType(typeof(RickCreateNavigationCommandResponse), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetLastNavigationByRickId([FromServices] IMediator mediator,
                                                    [FromServices] ILogger<NavigationController> _logger,
                                                    [FromBody] RickCreateNavigationCommandRequest navigation)
        {
            try
            {                
                _logger.LogInformation($"Starting create navigation by rickId: {navigation.RickId}");
                var result = await mediator.Send(navigation);
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
