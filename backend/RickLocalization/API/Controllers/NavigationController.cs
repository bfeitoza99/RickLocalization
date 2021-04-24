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
    public class NavigationController : ControllerBase
    {

        [HttpGet]
        [Route("")]
        public IActionResult GetById(
                                    [FromServices] IMediator mediator,
                                    [FromQuery] NavigationQueryRequest command)
        {
            var result = mediator.Send(command);
            return Ok(result);
        }
    }
}
