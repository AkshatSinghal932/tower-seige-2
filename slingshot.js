class Slingshot{
   constructor(bodyA,pointB){
    var options={
     bodyA : bodyA,
     pointB : pointB,
     stiffness : 0.04,
     length:20
    }
    this.sling=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.sling);
   } 
   fly(){
       this.sling.bodyA=null;
   }
   attach(bodyA){
     this.sling.bodyA=bodyA;
   }
   display(){
       if(this.sling.bodyA){
         var bodyA=this.sling.bodyA.position;
         var pointB= this.pointB;

         line(bodyA.x,bodyA.y,pointB.x,pointB.y)
       }
   }
}