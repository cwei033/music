class Notes {
  constructor() {
    this.y = 0;
  }

  display() {
    //background(220);
    fill(255);
    circle(50, this.y, 20);

     // if (this.y < 0) {
     //   this.y = height;
     // }
  }

  move() {
    this.y++;
  }
}
