class Paper {
    constructor(x,y){
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }

        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 70;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //fill('violet');
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        this.image.resize(70,85);
    }
}