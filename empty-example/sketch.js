var bird;
var pipes = [];

function setup() {
  print('setup working.');
  // put setup code here
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
  background(0);
  bird.update();
  bird.show();

  // At every 40 frames something will happen.
  // In other words, any time a number is divisible by 40 with a reminder of 0 something will happen.
  // Example: 0, 40, 80, 120...
  if(frameCount % 100 == 0){
    pipes.push(new Pipe());
  }

  for(var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();
    if(pipes[i].offscreen()){
      // As the pipes go off the screen they're going to be deleted.
      pipes.splice(i, 1);
    }
  }
}

function keyPressed(){
  if(key == ' '){
    console.log('SPACE')
    bird.up();
  }
}