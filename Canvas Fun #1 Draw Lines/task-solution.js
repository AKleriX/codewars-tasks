function drawLines(points) {
  var canvas = new Canvas(100, 100); //Create a 100 x 100 canvas
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 100, 100); //Draw background
  ctx.strokeStyle = '#ff0000'; //Set pen's color
  ctx.beginPath();
  //Don't delete or modify the code above
  //Your code starts here:

  //This is an example, it will draw a line from point(0,0) to point(99,99)

  points.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));

  //Don't delete or modify the following code
  ctx.stroke(); //Draw the path you made above
  return canvas.toDataURL(); //Returns the image data
}
