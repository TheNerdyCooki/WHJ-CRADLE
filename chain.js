class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        image(this.chain1, 200, 25)
        image(this.chain2, 175, 25)
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            image(this.chain3, pointA.x-30, pointA.y-10)
            push();
            strokeWeight(4);
        stroke(166, 112, 53)
           line(pointA.x-25, pointA.y, pointB.x-5, pointB.y);
           line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
           pop();
        } 
    }
    
}