class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            //bodyA:body1,
            //bodyB:body2,
            //pointB{x:this.offsetX, y:this.offsetY};
            bodyA:bodyA,
            bodyB:bodyB,
            //pointB: {x:this.offsetX, y:this.offsetY
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var possA=this.chain.bodyA.position;
        var possB=this.chain.bodyB.position;
        push();
        strokeWeight(5);
        fill ("red")
        //line (possA.x,possA.y,possB.x,possB.y);
        //pop();
        //line (possA.x,possA.y,possB.x+offsetX,possB.y+offsetY);
        //pop();
        line (possA.x,possA.y,possB.x+this.offsetX,possB.y+this.offsetY);
        pop();
    }
}