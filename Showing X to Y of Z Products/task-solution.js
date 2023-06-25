const paginationText = (pageNumber, pageSize, totalProducts) =>
  `Showing ${pageSize * pageNumber - pageSize + 1} to ${
    pageSize * pageNumber > totalProducts ? totalProducts : pageSize * pageNumber
  } of ${totalProducts} Products.`;
