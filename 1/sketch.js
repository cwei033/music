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
let notes6 = [];
let notes7 = [];
let notes8 = [];
let notes9 = [];
let notes10 = [];
let w = 700 / 10 - 30;

let state = 'title';
let cnv;


function preload() {
  song = loadSound('BEAST-Good Luck Piano Version.mp3')
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function setup() {
  cnv = createCanvas(700, 500);
  angleMode(DEGREES);
  textFont('monospace');

  button = createButton('toggle');
  button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 16);
  song.play();


  notes1[0] = new Notes(w);
  notes2[0] = new Notes(w * 2);
  notes3[0] = new Notes(w * 3);
  notes4[0] = new Notes(w * 4);
  notes5[0] = new Notes(w * 5);
  notes6[0] = new Notes(w * 6);
  notes7[0] = new Notes(w * 7);
  notes8[0] = new Notes(w * 8);
  notes9[0] = new Notes(w * 9);
  notes10[0] = new Notes(w * 10);

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
      drawNotes();

      // cnv.mouseClicked(level1MouseClicked);
      break;
    case 'endScreen':
      endScreen();
      cnv.mouseClicked(endScreenMouseClicked);
      break;
    default:
      break;
  }
}




// var vol = amp.getLevel();
// volhistory.push(vol);
//
// noFill();
// translate(width/2, height/2);
// beginShape();
// for (var i = 0; i < 360; i ++) {
//   var r = map(volhistory[i], 0, 1, 50, 300)
//   var x = r * cos(i);
//   var y = r* sin(i);
//   vertex(x, y);
// }
// endShape();
//
// if (volhistory.length > 360) {
//   volhistory.splice(0, 1);
// }


function title() {
  background(220);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', width / 2, height / 5);
  textSize(30);
  text('click anywhere to start', width / 2, height / 2);
  song.pause();
}

function titleMouseClicked() {
  state = 'level 1';
}

function level1() {
  background(220);
  // song.play();
}

function drawNotes() {
  if (spectrumHistory[spectrumHistory.length - 1][1] == 255) {
    notes1.push(new Notes(w));
  }
  if (spectrumHistory[spectrumHistory.length - 1][2] >= 240) {
    notes2.push(new Notes(w * 2));
  }
  if (spectrumHistory[spectrumHistory.length - 1][3] >= 150) {
    notes3.push(new Notes(w * 3));
  }
  if (spectrumHistory[spectrumHistory.length - 1][4] >= 120) {
    notes4.push(new Notes(w * 4));
  }
  if (spectrumHistory[spectrumHistory.length - 1][5] >= 120) {
    notes5.push(new Notes(w * 5));
  }
  if (spectrumHistory[spectrumHistory.length - 1][6] >= 70) {
    notes6.push(new Notes(w * 6));
  }
  if (spectrumHistory[spectrumHistory.length - 1][7] >= 40) {
    notes7.push(new Notes(w * 7));
  }
  if (spectrumHistory[spectrumHistory.length - 1][8] >= 30) {
    notes8.push(new Notes(w * 8));
  }
  if (spectrumHistory[spectrumHistory.length - 1][9] >= 20) {
    notes9.push(new Notes(w * 9));
  }
  if (spectrumHistory[spectrumHistory.length - 1][10] >= 1) {
    notes10.push(new Notes(w * 10));
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
  for (let i = 1; i < notes6.length; i++) {
    notes6[i].display();
    notes6[i].move();
  }
  for (let i = notes6.length - 1; i >= 0; i--) {
    if (notes6[i].y > height) {
      notes6.splice(i, 1);
    }
  }
  for (let i = 1; i < notes7.length; i++) {
    notes7[i].display();
    notes7[i].move();
  }
  for (let i = notes7.length - 1; i >= 0; i--) {
    if (notes7[i].y > height) {
      notes7.splice(i, 1);
    }
  }
  for (let i = 1; i < notes8.length; i++) {
    notes8[i].display();
    notes8[i].move();
  }
  for (let i = notes8.length - 1; i >= 0; i--) {
    if (notes8[i].y > height) {
      notes8.splice(i, 1);
    }
  }
  for (let i = 1; i < notes9.length; i++) {
    notes9[i].display();
    notes9[i].move();
  }
  for (let i = notes9.length - 1; i >= 0; i--) {
    if (notes9[i].y > height) {
      notes9.splice(i, 1);
    }
  }
  for (let i = 1; i < notes10.length; i++) {
    notes10[i].display();
    notes10[i].move();
  }
  for (let i = notes10.length - 1; i >= 0; i--) {
    if (notes10[i].y > height) {
      notes10.splice(i, 1);
    }
  }
}
