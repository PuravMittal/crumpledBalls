class paper{
	constructor(x,y,r){
        //gives properties to the paper
		var options={
			isStatic:false,
			restitution:0.3,
			friction:100,
			density:1.2			
			}

        //creates physics paper body
        this.body=Bodies.circle(x, y, r, options);
        //stands for radius
		this.r=r;
        //sets image to the variable
		this.image=loadImage("paper.png");
		//creates variable
		World.add(myWorld, this.body);
	}
	display(){

		//positions the paperball	
		var paperpos=this.body.position;		

        //saves new setting
		push();
        //translates the origin
		translate(paperpos.x, paperpos.y);
        //makes image center
		imageMode(CENTER);
		//adjusts image of variable
		image(this.image, 0,0,2*this.r, 2*this.r);
		//reverts old setting
		pop();
	}
}