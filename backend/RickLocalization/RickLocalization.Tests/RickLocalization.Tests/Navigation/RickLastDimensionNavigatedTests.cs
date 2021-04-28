using Moq;
using RickLocalization.Application.Query.RickLastDimensionNavigated;
using RickLocalization.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace RickLocalization.Tests.Navigation
{
    public class RickLastDimensionNavigatedTests
    {
        [Fact]
        public async Task RickNavigation_GetLastNavigationsByRickId()
        {

            var rickRepository = new Mock<IRepository<Domain.Entities.Rick>>();
            var repositoryNavigation = new Mock<INavigationRepository>();

            var handler = new Mock<RickLastDimensionNavigatedQueryHandle>(repositoryNavigation.Object, rickRepository.Object);

            RickLastDimensionNavigatedQueryRequest query = new RickLastDimensionNavigatedQueryRequest(1);

            var response = await handler.Object.Handle(query, default(CancellationToken));

            Assert.IsType<RickLastDimensionNavigatedQueryResponse>(response);
        }
    }
}
