class Notes {
  constructor(_x) {
    this.x = _x;
    this.y = 0;
  }

  display() {
    //background(220);
    fill(255);
    circle(this.x, this.y, 20);

     // if (this.y < 0) {
     //   this.y = height;
     // }
  }

  move() {
    this.y++;
  }
}
