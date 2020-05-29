class Chain{
    constructor(ujjessha,jain){
       var options={
           bodyA:ujjessha,
           bodyB:jain,
           lenght:10,
           stiffness:1

        }
        this.Chain=Constraint.create(options);
        World.add(world,this.Chain);
        
    }
    display(){

        var posA=this.Chain.bodyA.position
        var posB=this.Chain.bodyB.position
         line(posA.x,posA.y,posB.x,posB.y);
         strokeWeight(4);

    }
}