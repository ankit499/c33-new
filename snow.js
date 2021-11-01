class Snow{
constructor(x,y,r){
var options={
    restitution:0.4
}
    
this.body = Bodies.circle(x, y, this.r, options);
this.r = r;


this.snow1 = loadImage("snow4.webp");
this.snow2 = loadImage("snow5.webp");
World.add(world, this.body)

}


display(){
    var angle = this.body.angle;
    var rand= Math.round(random(1,2));

    if(rand===1){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.snow1, 0, 0, this.r*2, this.r*2);
        pop();

    }
    else{
        push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.snow2, 0, 0, this.r*2, this.r*2);
    pop();
    }


}











}