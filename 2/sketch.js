var amp;
var song;
var button;
var fft;
var volhistory = [];
var spectrumHistory = [];
let notes1 = [];
let notes2 = [];
let notes3 = [];
let notes4 = [];
let notes5 = [];
let w = 119;
let points = 0;
let line1Appear = true;
let line2Appear = false;
let line3Appear = false;
let line4Appear = false;
let line5Appear = false;
let line6Appear = false;
let line2Disappear = false;
let appearLine1 = 0;
let appearLine2 = 0;
let appearLine3 = 0;
let appearLine4 = 0;
let appearLine5 = 0;
let appearLine6 = 0;

let state = 'title';
let cnv;


function preload() {
  song1 = loadSound('level1.mp3')
  song2 = loadSound('level2.mp3')
  song3 = loadSound('level3.mp3')
}

// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }

function setup() {
  cnv = createCanvas(700, 500);
  angleMode(DEGREES);
  textFont('monospace');
  noStroke();

  // button = createButton('toggle');
  // button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 16);
  // song.play();


  notes1[0] = new Notes(w * 1);
  notes2[0] = new Notes(w * 2);
  notes3[0] = new Notes(w * 3);
  notes4[0] = new Notes(w * 4);
  notes5[0] = new Notes(w * 5);


}

function draw() {
  background(220);
  var spectrum = fft.analyze();
  console.log(spectrum);
  spectrumHistory.push(spectrum);

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      drawNotes1();
      break;
    case 'end of level 1':
      endOfLevel1();
      break;
    case 'level 2':
      level2();
      drawNotes2();
      break;
    case 'end of level 2':
      endOfLevel2();
      break;
    case 'level 3':
      level3();
      drawNotes3();
      break;
    case 'end of level 3':
      endOfLevel3();
      break;
    case 'endScreen':
      endScreen();
      cnv.mouseClicked(endScreenMouseClicked);
      break;
    default:
      break;
  }
}

function title() {
  background(220);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Love and Time', width / 2, height*.35);
  textSize(20);
  text(`[how to play:]
use DFJKL keys to hit the corresponding notes`, width / 2, height*.5);
  textSize(30);
  text('begin the tale...(click)', width / 2, height*.70);
}

function titleMouseClicked() {
  state = 'level 1';
  song1.play();

}

function keyTyped() {
  for (let i = 1; i < notes1.length; i++) {
    if (key === 'd') {
      if (notes1[i].y > 410 && notes1[i].y < 450) {
        points++;
        notes1.splice(i, 1);
      }
    }
  }
  for (let i = 1; i < notes2.length; i++) {
    if (key === 'f') {
      if (notes2[i].y > 410 && notes2[i].y < 450) {
        points++;
        notes2.splice(i, 1);
      }
    }
  }
  for (let i = 1; i < notes3.length; i++) {
    if (key === 'j') {
      if (notes3[i].y > 410 && notes3[i].y < 450) {
        points++;
        notes3.splice(i, 1);
      }
    }
  }
  for (let i = 1; i < notes4.length; i++) {
    if (key === 'k') {
      if (notes4[i].y > 410 && notes4[i].y < 450) {
        points++;
        notes4.splice(i, 1);
      }
    }
  }
  for (let i = 1; i < notes5.length; i++) {
    if (key === 'l') {
      if (notes5[i].y > 410 && notes5[i].y < 450) {
        points++;
        notes5.splice(i, 1);
      }
    }
  }
}

function level1() {
  background(220);
  push();
  fill(255);
  noStroke();
  textSize(15);
  text(`points: ${points}`, 645, 20);
  pop();

  story1();

  if (song1.isPlaying() === false) {
    state = 'end of level 1';
  }

}

function story1() {
  push();
  if (line1Appear === true) {
    appearLine1 += .1
  }
  if (appearLine1 >= 255) {
    line1Appear = false;
  }
  if (line1Appear === false) {
    appearLine1 -= .1
  }
  if (appearLine1 < 0 && line2Appear === false) {
    appearLine2 += .1;
  }
  if (appearLine2 > 255 && line2Appear === false) {
    line2Appear = true;
  }
  if (line2Appear === true) {
    appearLine2 -= .1
  }
  console.log(appearLine2);
  console.log(line2Appear)
  fill(255, appearLine1);
  noStroke();
  textSize(18);
  text(`Once upon a time, there was an island where all the
feelings lived: Happiness, Sadness, Knowledge,and all of the others,
including Love.
One day, it was announced to the feelings that the island would sink,
so all constructed boats and left.
Except for Love.`, 350, 50);
  fill(255, appearLine2);
  noStroke();
  textSize(18);
  text(`Love was the only one who stayed.
Love wanted to hold out until the last possible moment.
When the island had almost sunk,
Love decided to ask for help.`, 350, 50);
  pop();
}

function drawNotes1() {
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 85) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 135) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 100) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 90) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 220) {
    notes5.push(new Notes(w * 5));
  }


  for (let i = 1; i < notes1.length; i++) {
    notes1[i].display();
    notes1[i].move();
  }
  for (let i = notes1.length - 1; i >= 0; i--) {
    if (notes1[i].y > height) {
      notes1.splice(i, 1);
    }
  }
  for (let i = 1; i < notes2.length; i++) {
    notes2[i].display();
    notes2[i].move();
  }
  for (let i = notes2.length - 1; i >= 0; i--) {
    if (notes2[i].y > height) {
      notes2.splice(i, 1);
    }
  }
  for (let i = 1; i < notes3.length; i++) {
    notes3[i].display();
    notes3[i].move();
  }
  for (let i = notes3.length - 1; i >= 0; i--) {
    if (notes3[i].y > height) {
      notes3.splice(i, 1);
    }
  }
  for (let i = 1; i < notes4.length; i++) {
    notes4[i].display();
    notes4[i].move();
  }
  for (let i = notes4.length - 1; i >= 0; i--) {
    if (notes4[i].y > height) {
      notes4.splice(i, 1);
    }
  }
  for (let i = 1; i < notes5.length; i++) {
    notes5[i].display();
    notes5[i].move();
  }
  for (let i = notes5.length - 1; i >= 0; i--) {
    if (notes5[i].y > height) {
      notes5.splice(i, 1);
    }
  }

  push();
  fill(200);
  noStroke();
  rect(0, 430, 700, 4);
  pop();
}

function endOfLevel1() {
  background(220);
  if (points >= 320) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`the tale continues...(click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(end1MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`not enough points to proceed...try again? (click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(retry1MouseClicked);
  }
}

function end1MouseClicked() {
  state = 'level 2'
  song2.play();
  points = 0;
}

function retry1MouseClicked() {
  state = 'level 1'
  song1.play();
  points = 0;
}

function level2() {
  background(220);
  push();
  fill(255);
  noStroke();
  textSize(15);
  text(`points: ${points}`, 645, 20);
  pop();

  if (song2.isPlaying() === false) {
    state = 'end of level 2';
  }

}

function drawNotes2() {
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 85) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 135) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 100) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 90) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 220) {
    notes5.push(new Notes(w * 5));
  }


  for (let i = 1; i < notes1.length; i++) {
    notes1[i].display();
    notes1[i].move();
  }
  for (let i = notes1.length - 1; i >= 0; i--) {
    if (notes1[i].y > height) {
      notes1.splice(i, 1);
    }
  }
  for (let i = 1; i < notes2.length; i++) {
    notes2[i].display();
    notes2[i].move();
  }
  for (let i = notes2.length - 1; i >= 0; i--) {
    if (notes2[i].y > height) {
      notes2.splice(i, 1);
    }
  }
  for (let i = 1; i < notes3.length; i++) {
    notes3[i].display();
    notes3[i].move();
  }
  for (let i = notes3.length - 1; i >= 0; i--) {
    if (notes3[i].y > height) {
      notes3.splice(i, 1);
    }
  }
  for (let i = 1; i < notes4.length; i++) {
    notes4[i].display();
    notes4[i].move();
  }
  for (let i = notes4.length - 1; i >= 0; i--) {
    if (notes4[i].y > height) {
      notes4.splice(i, 1);
    }
  }
  for (let i = 1; i < notes5.length; i++) {
    notes5[i].display();
    notes5[i].move();
  }
  for (let i = notes5.length - 1; i >= 0; i--) {
    if (notes5[i].y > height) {
      notes5.splice(i, 1);
    }
  }

  push();
  fill(200);
  noStroke();
  rect(0, 430, 700, 4);
  pop();
}

function endOfLevel2() {
  background(220);
  if (points >= 320) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`the tale continues...(click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(end2MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`not enough points to proceed...try again? (click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(retry2MouseClicked);
  }
}

function end2MouseClicked() {
  state = 'level 3'
  song3.play();
  points = 0;
}

function retry2MouseClicked() {
  state = 'level 2'
  song2.play();
  points = 0;
}

function level3() {
  background(220);
  push();
  fill(255);
  noStroke();
  textSize(15);
  text(`points: ${points}`, 645, 20);
  pop();

  if (song3.isPlaying() === false) {
    state = 'end of level 3';
  }

}

function drawNotes3() {
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 85) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 135) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 100) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 90) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 220) {
    notes5.push(new Notes(w * 5));
  }


  for (let i = 1; i < notes1.length; i++) {
    notes1[i].display();
    notes1[i].move();
  }
  for (let i = notes1.length - 1; i >= 0; i--) {
    if (notes1[i].y > height) {
      notes1.splice(i, 1);
    }
  }
  for (let i = 1; i < notes2.length; i++) {
    notes2[i].display();
    notes2[i].move();
  }
  for (let i = notes2.length - 1; i >= 0; i--) {
    if (notes2[i].y > height) {
      notes2.splice(i, 1);
    }
  }
  for (let i = 1; i < notes3.length; i++) {
    notes3[i].display();
    notes3[i].move();
  }
  for (let i = notes3.length - 1; i >= 0; i--) {
    if (notes3[i].y > height) {
      notes3.splice(i, 1);
    }
  }
  for (let i = 1; i < notes4.length; i++) {
    notes4[i].display();
    notes4[i].move();
  }
  for (let i = notes4.length - 1; i >= 0; i--) {
    if (notes4[i].y > height) {
      notes4.splice(i, 1);
    }
  }
  for (let i = 1; i < notes5.length; i++) {
    notes5[i].display();
    notes5[i].move();
  }
  for (let i = notes5.length - 1; i >= 0; i--) {
    if (notes5[i].y > height) {
      notes5.splice(i, 1);
    }
  }

  push();
  fill(200);
  noStroke();
  rect(0, 430, 700, 4);
  pop();
}

function endOfLevel3() {
  background(220);
  if (points >= 320) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`Knowledge smiled with deep wisdom and answered, "because only Time is capable of understanding how valuable Love is."`, width/2, height/2)
    pop();
    cnv.mouseClicked(end3MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(15);
    text(`not enough points to proceed...try again? (click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(retry3MouseClicked);
  }
}

function retry3MouseClicked() {
  state = 'level 3'
  song3.play();
  points = 0;
}
