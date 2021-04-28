using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Moq;
using RickLocalization.Application.Query.RickDetails;
using RickLocalization.Data;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace RickLocalization.Tests.Rick
{
    public class RickDetailsTests
    {

        [Fact]
        public async Task RickQuery_GetRickDetails()
        {
            var mapper = new Mock<IMapper>();

            var dbContext = new Mock<RickLocalizationContext>();

           var _mockSet = new Mock<DbSet<Domain.Entities.Rick>>();

            dbContext.Setup(c => c.Set<Domain.Entities.Rick>()).Returns(_mockSet.Object);

            var repository = new Mock<IRepository<Domain.Entities.Rick>>();

            mapper.Setup(x => x.Map(It.IsAny<Domain.Entities.Rick>(), It.IsAny<RickDetailsQueryResponse>())).Returns(new RickDetailsQueryResponse()); 

            var handler = new Mock<RickDetailsQueryHandle>(repository.Object, mapper.Object);  

            RickDetailsQueryRequest query = new RickDetailsQueryRequest() { 
                RickId = 1
            };

            var response = await handler.Object.Handle(query, default(CancellationToken));

            Assert.IsType<RickDetailsQueryResponse>(response);
        }
    }
}
