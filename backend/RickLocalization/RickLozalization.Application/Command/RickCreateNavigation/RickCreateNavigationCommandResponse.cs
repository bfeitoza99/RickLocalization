using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Command.RickCreateNavigation
{
    public class RickCreateNavigationCommandResponse
    {
        public RickCreateNavigationCommandResponse(bool isSucess)
        {
            IsSucess = isSucess;
        }

        public bool IsSucess { get; set; }
    }
}
