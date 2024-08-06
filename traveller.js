class Traveller {
  constructor(x, y) {
    console.log("Hello!");
    
    this.step = 5;
    this.sizes = [1,2,3,5,8,13,21,34];
    this.generation = 0;
    this.x = x;
    this.y = y;
    this.color = random(['red', 'yellow', 'pink', 'purple', 'green', 'indigo', 'darkblue', 'white']);
    
    this.walk();
  }
  
  walk() {
    stroke(this.color);
    let variationX = random([-1, 1]);
    let variationY = random([-1, 1]);
    
    strokeWeight(this.sizes[this.generation]);
    this.generation = (this.generation >= 21) ? 0 : this.generation + 1;
        
    this.x += this.step * variationX;
    this.y += this.step * variationY;
    
    point(this.x, this.y);
  }  
  
}