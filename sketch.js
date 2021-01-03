let stars = [];

function setup() {
  pixelDensity(1);
  var cnv = createCanvas(300, 300);
  cnv.parent('sketch');
  background(0);
  rectMode(CENTER);
  for (let i = 5; i < width; i += 20) {
    for (let j = 5; j < height; j += 20) {
      stroke(random(155));
      if (random() < 0.5) {
        stars.push(new Star(i + random(15), j + random(15)));
        // point(i + random(15), j + random(15));
      }
    }
  }
}

function draw() {
  background(0);
  stars.forEach(star => {
    star.update();
    star.show();
  });
}