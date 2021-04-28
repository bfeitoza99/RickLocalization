using AutoMapper;
using Moq;
using RickLocalization.Application.Query.Navigation;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace RickLocalization.Tests.Navigation
{
    public class RickNavigationsTests
    {
        [Fact]
        public async Task RickNavigation_GetNavigationsByRickId()
        {

            var mapper = new Mock<IMapper>();
            var repository = new Mock<INavigationRepository>();

            var handler = new Mock<RickNavigationsQueryHandle>(repository.Object, mapper.Object);

            RickNavigationsQueryRequest query = new RickNavigationsQueryRequest(1);

            var response = await handler.Object.Handle(query, default(CancellationToken));

            Assert.IsType<RickNavigationsQueryResponse>(response);
        }
    }
}
