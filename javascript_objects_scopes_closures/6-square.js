#!/usr/bin/node

const Rectangle = require('./5-square')
class Square extends Square {
	constructor(size) {
		super(size, size);
	}

	charPrint (c) {
		if (c === undefined) {
		  this.print();
		} else {
		  for (let i = 0; i < this.height; i++) {
			let line = '';
			for (let j = 0; j < this.width; j++) {
			  line += c;
			}
			console.log(line);
		  }
		}
	  }
}