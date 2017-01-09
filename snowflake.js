class Snowflake {
	
	constructor (x,y, shimmering) {
		// radius will always been between 2 and 6
		this.radius = Math.floor(Math.random() * 100 / 20) + 2;
		// velocity in the x direction is positive
		this.xVelocity = 1;
		// velocity in the y direction varies based on snowflake size
		this.yVelocity = this.calculateYVelocity();
		// random coordinates inside the container
		this.coordinates = [x,y];
		// shimmering effect (small side-to-side movements)
		this.shimmering = shimmering;
	}

	calculateYVelocity () {
		// larger snowflakes fall faster than smaller snowflakes
		return this.radius / 2;
	}

	newYPosition () {
		this.coordinates[1] += this.yVelocity;
	}

	shimmer () {
		this.coordinates[0] += 1 - (Math.random() + .5);
	}

	recycle (stage) {
		if (this.coordinates[1] > stage.canvas.height) {
			this.coordinates[1] = 0;
		}
	}

	animate (stage) {
		stage.ctx.beginPath();
	  stage.ctx.arc(this.coordinates[0], this.coordinates[1], this.radius, 0, 2 * Math.PI, false);
	  stage.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	  stage.ctx.fill();
	  this.newYPosition();
	  if (this.shimmering) {
	  	this.shimmer();
	  }
	  this.recycle(stage);
	}

}

class Snowstorm {

	// creates a snowstorm with a certain number of snowflakes
	constructor (canvasId,numberOfSnowflakes, shimmering) {

		// instantiate the stage (i.e. the canvas)
		this.stage = new Stage(canvasId, numberOfSnowflakes);

		this.snowflakes = [];
		for (var i = 0; i < numberOfSnowflakes; i++) {
			// position the snowflakes randomly on the canvas
			var x = Math.floor(Math.random() * this.stage.canvas.width);
			var y = Math.floor(Math.random() * this.stage.canvas.height);
			
			// create snowflakes and add them to the storm
			this.snowflakes.push(new Snowflake(x,y, shimmering));
		}
	}

	get numberOfSnowflakes () {
		// returns the number of snowflakes in the array
		return this.snowflakes.length;
	}

	start () {
		this.animationInterval = setInterval(() => {
			this.stage.ctx.clearRect(0, 0, this.stage.canvas.width, this.stage.canvas.height);
			this.snowflakes.forEach((item,index,array) => {
				item.animate(this.stage);
			});
		}, 24);
	}

	stop () {
		clearInterval(this.animationInterval);
	}

}

// the stage is where the snowstorm takes place
class Stage {

	constructor (canvasId,numberOfSnowflakes) {
		// instantiate the canvas
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    // set the dimensions of the canvas
    this.canvas.width = this.canvas.getAttribute("width");
    this.canvas.height = this.canvas.getAttribute("height");

    // make the canvas transparent
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

}