function removeSmallest(numbers) {
    let minNumIndex = numbers.indexOf(Math.min.apply(null, numbers));
    return numbers.slice(0, minNumIndex).concat(numbers.slice(minNumIndex + 1));
  }