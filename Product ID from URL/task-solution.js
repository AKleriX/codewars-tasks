const getProductId = (url) => url.replace(/\D/g, ' ').trim().split(/\s+/).slice(-2)[0];
