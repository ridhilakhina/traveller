let nodeCollection = [];
let totalNodes = 100;

function setup() {
  createCanvas(600, 600);
  background(0);
  frameRate(13);
  
  for(let a=0; a<totalNodes; a++) {
    nodeCollection.push(new Traveller(random(600), random(600)));
  }
}

function draw() {
  for(let a=0; a<totalNodes; a++) {
    nodeCollection[a].walk();
  }
}