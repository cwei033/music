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
let line3Appear = true;
let line4Appear = false;
let line5Appear = false;
let line6Appear = true;
let line7Appear = false;
let line8Appear = false;
let appearLine1 = 0;
let appearLine2 = 0;
let appearLine3 = 0;
let appearLine4 = 0;
let appearLine5 = 0;
let appearLine6 = 0;
let appearLine7 = 0;
let appearLine8 = 0;
let titleFont;
let bg;

let state = 'title';
let cnv;


function preload() {
  song1 = loadSound('level1.mp3')
  song2 = loadSound('level2.mp3')
  song3 = loadSound('level3.mp3')
  titleFont = loadFont('Meddon-Regular.ttf')
  bg = loadImage('LRKp.gif')
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
  background(bg);
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
  background(bg);
  textSize(70);
  fill(255);
  textAlign(CENTER);
  push();
  textFont(titleFont);
  text('Love and Time', width / 2, height*.35);
  pop();
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
  background(bg);
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
  if (appearLine1 < -80 && line2Appear === false) {
    appearLine2 += .1;
  }
  if (appearLine2 > 255 && line2Appear === false) {
    line2Appear = true;
  }
  if (line2Appear === true) {
    appearLine2 -= .1
  }

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
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 90) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 140) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 100) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 90) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 225) {
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
  rect(0, 430, 700, 2);
  pop();
}

function endOfLevel1() {
  background(bg);
  if (points >= 200) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text(`the tale continues...(click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(end1MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
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
  appearLine1 = 0;
  appearLine2 = 0;
  line1Appear = true;
  line2Appear = false;
}

function level2() {
  background(bg);
  push();
  fill(255);
  noStroke();
  textSize(15);
  text(`points: ${points}`, 645, 20);
  pop();

  story2();

  if (song2.isPlaying() === false) {
    state = 'end of level 2';
  }

}

function story2() {
  push();
  if (line3Appear === true) {
    appearLine3 += .15;
  }
  if (appearLine3 >= 255) {
    line3Appear = false;
  }
  if (line3Appear === false) {
    appearLine3 -= .15;
  }
  if (appearLine3 < 0 && line4Appear === false) {
    appearLine4 += .15;
  }
  if (appearLine4 > 255 && line4Appear === false) {
    line4Appear = true;
  }
  if (line4Appear === true) {
    appearLine4 -= .15;
  }
  if (line4Appear === true && appearLine4 < 0 && line5Appear === false) {
    appearLine5 += .15;
  }
  if (appearLine5 > 255) {
    line5Appear = true;
  }
  if (line5Appear === true) {
    appearLine5 -= .15
  }

  fill(255, appearLine3);
  noStroke();
  textSize(18);
  text(`Richness was passing by Love in a grand boat.
Love said, "Richness, can you take me with you?"
Richness answered, "no, I can't. There are a lot of gold and silver
in my boat. There is no place here for you."`, 350, 50);
  fill(255, appearLine4);
  noStroke();
  textSize(18);
  text(`Love decided to ask Vanity
who was also passing by in a beautiful vessel.
"Vanity, please help me!" "I can't help you, Love.
You are all wet and might damage my boat," Vanity answered.`, 350, 50);
  fill(255, appearLine5);
  noStroke();
  textSize(18);
  text(`Sadness was close by so Love asked
"Sadness, let me go with you."
"Oh...Love, I am so sad that I need to be by myself!"
Happiness passed by Love, too, but she was so happy
that she did not even hear when Love called her.`, 350, 50);

  pop();
}

function drawNotes2() {
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 62) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 185) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 137) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 120) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 217) {
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
  rect(0, 430, 700, 2);
  pop();
}

function endOfLevel2() {
  background(bg);
  if (points >= 620) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text(`the tale continues...(click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(end2MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
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
  appearLine3 = 0;
  appearLine4 = 0;
  appearLine5 = 0;
  line3Appear = true;
  line4Appear = false;
  line5Appear = false;
}

function level3() {
  background(bg);
  push();
  fill(255);
  noStroke();
  textSize(15);
  text(`points: ${points}`, 645, 20);
  pop();

  story3();

  if (song3.isPlaying() === false) {
    state = 'end of level 3';
  }

}

function story3() {
  push()
  if (line6Appear === true) {
    appearLine6 += .25;
  }
  if (appearLine6 >= 255) {
    line6Appear = false;
  }
  if (line6Appear === false) {
    appearLine6 -= .25;
  }
  if (appearLine6 < 0 && line7Appear === false) {
    appearLine7 += .25;
  }
  if (appearLine7 > 255 && line7Appear === false) {
    line7Appear = true;
  }
  if (line7Appear === true) {
    appearLine7 -= .25;
  }
  if (line7Appear === true && appearLine7 < 0 && line8Appear === false) {
    appearLine8 += .25;
  }
  if (appearLine8 > 255) {
    line8Appear = true;
  }
  if (line8Appear === true) {
    appearLine8 -= .25;
  }

  fill(255, appearLine6);
  noStroke();
  textSize(18);
  text(`Suddenly, there was a voice,
  "Come, Love, I will take you."
  It was an elder.
  So blessed and overjoyed, Love even forgot to ask the elder
  where they were going.`, 350, 50);
  fill(255, appearLine7);
  noStroke();
  textSize(18);
  text(`When they arrived at dry land, the elder went her own way.
Realizing how much was owed the elder,
Love asked Knowledge, another elder,
"Who helped me?"`, 350, 50);
  fill(255, appearLine8);
  noStroke();
  textSize(18);
  text(`"It was Time," Knowledge answered.
  "Time?" asked Love.
  "But why did Time help me?"`, 350, 50);

  pop();
}

function drawNotes3() {
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 20) {
    notes1.push(new Notes(w * 1));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 95) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 40) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 30) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 200) {
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
  rect(0, 430, 700, 2);
  pop();
}

function endOfLevel3() {
  background(bg);
  if (points >= 330) {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text(`Knowledge smiled with deep wisdom and answered,
"because only Time is capable of understanding
how valuable Love is."`, width/2, height/2)
    pop();
    cnv.mouseClicked(end3MouseClicked);
  } else {
    push();
    rectMode(CENTER);
    fill(255);
    noStroke();
    textSize(20);
    text(`not enough points to proceed...try again? (click)`, width/2, height/2)
    pop();
    cnv.mouseClicked(retry3MouseClicked);
  }
}

function retry3MouseClicked() {
  state = 'level 3'
  song3.play();
  points = 0;
  appearLine6 = 0;
  appearLine7 = 0;
  appearLine8 = 0;
  line6Appear = true;
  line7Appear = false;
  line8Appear = false;
}
