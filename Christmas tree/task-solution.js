function christmasTree(height) {
    let christmasTreeStars = [];
    for (let i = 1; i <= height; i++)
      christmasTreeStars.push(' '.repeat(height - i) + '*'.repeat(i + i - 1) + ' '.repeat(height - i));  
    return christmasTreeStars.join('\n');
  }