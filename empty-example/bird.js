
// Constructive function Bird.
function Bird(){
	this.y = height/2; // Places the Bird on the center of the window.
	this.x = 64;

	this.gravity = 0.6; // Gravity is the force that's pushing the bird down.
	this.lift = -15;
	this.velocity = 0; // Gravity is the force that's causing the velocity of the bird to increase.

	// Draws the Bird. 
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function(){
		this.velocity += this.lift;
	}    

	// 

	this.update = function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
	}
}