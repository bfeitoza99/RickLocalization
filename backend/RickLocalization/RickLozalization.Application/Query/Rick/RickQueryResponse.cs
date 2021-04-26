using System;
using System.Collections.Generic;
using System.Text;

namespace RickLocalization.Application.Query.Rick
{
    public class RickQueryResponse
    {
        public RickQueryResponse()
        {

        }

        public List<RickResponse> Ricks { get; set; }
    }
    public class RickResponse
    {
        public RickResponse()
        {

        }
        public int Id { get; set; }
        public string DimensionOriginName { get; set; }
        public string Details { get; set; }
    }

}
