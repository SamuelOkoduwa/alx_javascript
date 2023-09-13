#!/usr/bin/node

class Rectangle {

	constructor(w, h) {
		// if ((w <= 0) || (h <= 0) || !Number.isInteger(w) || !Number.isInteger(h)) {
		// 	this.width = undefined;
		// 	this.height = undefined;
		// }
		// else {
		// 	this.width = w;
		// 	this.width = h;
		// }
		if ((w <= 0) || (h <= 0) || !h || !w) {
            return this;
          }
        this.width = w;
        this.height = h;
	}

	print () {
		for (let i = 0; i < this.height; i++) {
		  let line = '';
		  for (let j = 0; j < this.width; j++) {
			line += 'X';
		  }
		  console.log(line);
		}
	  }
	
	  rotate () {
		const tamp = this.height;
		this.height = this.width;
		this.width = tamp;
	  }
	
	  double () {
		this.height *= 2;
		this.width *= 2;
	  }
}

module.exports = Rectangle;