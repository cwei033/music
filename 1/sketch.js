var amp;
var song;
var button;
var fft;
var volhistory = [];
var spectrumHistory = [];
let y = 500;


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
  for (var i = 0; i < spectrumHistory.length; i++) {
    if (spectrumHistory[i][1] === 255) {
      background(220);
      fill(255);
      // y = y - 1;
      circle(50, random(height), 10);
    } else {
      background(220);
    }
  }
}
