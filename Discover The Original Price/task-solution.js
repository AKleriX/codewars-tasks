const discoverOriginalPrice = (discountedPrice, salePercentage) => {
  return +(discountedPrice + (discountedPrice / (100 - salePercentage)) * salePercentage).toFixed(
    2,
  );
};
