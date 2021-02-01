class Drops{
    constructor(x, y, radius){
    var options = 
    {
      'isStatic':false,
    'restituion':1.4,
    'friction':0.1
    }   
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius
    World.add(world,this.body)
 }

   display()
   {
     push();
     translate(this.body.position.x,this.body.position.y)
     fill("blue")
     ellipseMode(CENTER)
     ellipse(0,0,this.radius)
     if(this.body.position.y > height ){
      Matter.Body.setPosition(this.body, {x:random(0,300), y:random(0,50)})

    }
   }
}