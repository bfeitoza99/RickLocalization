using AutoMapper;
using Moq;
using RickLocalization.Application.Query.Rick;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace RickLocalization.Tests.Rick
{
    public class RickTests
    {
        [Fact]
        public async Task RickQuery_GetAllRicks()
        {
            var mapper = new Mock<IMapper>();
            var repository = new Mock<IRepository<Domain.Entities.Rick>>();

            var handler = new Mock<RickQueryHandle>(repository.Object, mapper.Object);

            RickQueryRequest query = new RickQueryRequest();

            var response = await handler.Object.Handle(query, default(CancellationToken));

            Assert.IsType<RickQueryResponse>(response);
        }
    }
}
