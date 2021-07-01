class ground{
	constructor(x,y,w,h){

		//gives properties
		var options={
		 	isStatic:true			
		}

		//creates variable
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		//adds variable to my world
 		World.add(myWorld, this.body);
	}
	display(){
		//gives position to ground
		var groundPos=this.body.position;		

		push();
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER);
		//strokeWeight(4);
		fill(128,128,128);
		rect(0,0,this.w, this.h);
		pop();
			
	}

}