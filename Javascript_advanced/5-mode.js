#!/usr/BigInt/node

// Creating a function named change mode
function changeMode (size, weight, transform, background, color) {
	// using closure to change the style of the entire page setting the parameters
	const style = document.querySelector("style");
  style.innerHTML = `
    * {
      font-size: ${size}px;
      font-weight: ${weight};
      text-transform: ${transform};
      background-color: ${background};
      color: ${color};
    }`;
	
	// const style = document.querySelector('style');
	// style.innerHTML = * {
	// font-size: ${size}px;
    //   font-weight: ${weight};
    //   text-transform: ${transform};
    //   background-color: ${background};
    //   color: ${color};
    // }
	
	// return function () {
	// 	document.body.style.fontSize = size + 'px';
	// 	document.body.style.textTransform = transform;
	// 	document.body.style.fontWeight = weight;
	// 	document.body.style.color = color;
	// 	document.body.style.backgroundColor = background;
	// };
}
// The main function
function main (){
	spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	screenMode = changeMode(12, 'bold', 'lowercase', 'black', 'white');
	// Adding a paragraph to the body of the page
	const paragraph = document.createElement('p');
	paragraph.textContent = 'Welcome Holberton';
	document.body.appendChild(paragraph);
	// Adding a button to the body with the text Spooky
	const buttonOne = document.createElement('button');
	buttonOne.textContent = 'Spooky';
	buttonOne.addEventListener('click', spooky);
	document.body.appendChild(buttonOne);
	// Adding a button to the body with the text Dark mode
	const buttonTwo = document.createElement('button');
	buttonTwo.textContent = 'Dark Mode'
	buttonTwo.addEventListener('click', darkMode);
	document.body.appendChild(buttonTwo);
	// Adding a button to the body with the text Scream mode
	const buttonThree = document.createElement('button');
	buttonThree.textContent = 'Scream Mode';
	buttonThree.addEventListener('click', screamMode);
	document.body.appendChild(buttonThree);
}
main();
