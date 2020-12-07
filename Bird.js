class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //property-> is given in the constructor of the class using 'this' keyword
    //trajectory array so that we can print the smoke dot on each of the x,y position using for loop
    this.trajectory = [];
    //this.trajectory = [[200,200], [201,202], [203, 205], [], [], [].........];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.position.x > 200 && this.body.speed > 10){
      //collecting/storing the position of the bird
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    //loop to repeat 
    //i should start from 0
    // i should end at length of the array(no. of items)
    for(var i = 0; i < this.trajectory.length; i++ ){
      //image(loadedimage-variable, x , y);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1] );
    }

  }
}
