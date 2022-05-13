class CannonBall{
    constructor(x,y){
        var options = {
        isStatic: true
        }

    this.r=30;
    this.body=Bodies.circle(x,y,this.r,options)
    this.cannonball_image = loadImage("assets/cannonball.png");
    this.trajectory = []
    World .add(world,this.body);

}

 shoot(){
     var newangle = cannon.angle -28;
     newangle = newangle * (3.14/180);
     var velocity = p5.Vector.fromAngle(newangle);
     velocity.mult(0.5);
     Matter.Body.setVelocity(this.body,false);
     Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
 }






display(){
var pos = this.body.position;
var angle = this.body.angle;
push ();
imageMode (CENTER);
image (this.cannonball_image,pos.x,pos.y,this.r,this.r);
pop ();

if(this.body.velocity.x > 0 && pos.x > 10){
    var position = [pos.x,pos.y];
    this.trajectory.push(position)
}

for(var i = 0; i < this.trajectory.length; i++){
    image (this.cannonball_image,this.trajectory[i][0],this.trajectory[i][1],5,5)
}
}



    }