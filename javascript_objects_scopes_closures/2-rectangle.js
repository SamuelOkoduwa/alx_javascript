#!usr/bin/node

class Rectangle {

	constructor(w, h) {
		if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
			this.width = undefined;
			this.height = undefined;
		}
		else {
			this.width = w;
			this.width = h;
		}
	}
}

module.exports = Rectangle;