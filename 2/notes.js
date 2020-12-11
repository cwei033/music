class Notes {
  constructor(_x) {
    this.x = _x;
    this.y = 220;
  }

  display() {
    //background(220);
    fill(255);
    strokeWeight(10);
    stroke(255, 70)
    circle(this.x, this.y, 60);

     // if (this.y < 0) {
     //   this.y = height;
     // }
  }

  move() {
    this.y++;
  }
}
