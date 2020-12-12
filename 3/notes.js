class Notes {
  constructor(_x) {
    this.x = _x;
    this.y = 220;
    this.size = 60;
    this.transparency = 255;
    this.strokeAlpha = 70;
  }

  display() {
    //background(220);
    fill(255, this.transparency);
    strokeWeight(10);
    stroke(255, this.strokeAlpha)
    circle(this.x, this.y, this.size);

     // if (this.y < 0) {
     //   this.y = height;
     // }
  }

  move() {
    this.y++;
  }
}
