var amp;
var song;
var button;
var fft;
var volhistory = [];
var spectrumHistory = [];
let notes = [];


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
  createCanvas(700, 500);
  angleMode(DEGREES);

  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 16);

  notes[0] = new Notes();

}

function draw() {
  background(220);

  var spectrum = fft.analyze();
  console.log(spectrum);
  spectrumHistory.push(spectrum);

  drawNotes();

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

}

function drawNotes() {


  if (spectrumHistory[spectrumHistory.length - 1][1] == 255) {
    notes.push(new Notes());
  }

  for (let i = 0; i < notes.length; i++) {
    notes[i].display();
    notes[i].move();
  }
  for (let i = notes.length - 1; i >= 0; i--) {
    if (notes[i].y > height) {
      notes.splice(i, 1);
    }
  }
}
