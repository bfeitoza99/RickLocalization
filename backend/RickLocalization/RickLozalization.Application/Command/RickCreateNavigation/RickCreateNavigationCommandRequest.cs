using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Command.RickCreateNavigation
{
    public class RickCreateNavigationCommandRequest : IRequest<RickCreateNavigationCommandResponse>
    {
        public RickCreateNavigationCommandRequest()
        {

        }
        public int RickId { get; set; }
    }
}
