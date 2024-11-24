const container = document.querySelector('.container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'You really need to learn this'

container.appendChild(content)

const red = document.createElement('p');
red.classList.add('red');
red.style = 'color: red;'
red.textContent = 'hey im red'
container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.style = 'color: blue;';
blue.textContent = 'im blue h3'
container.appendChild(blue)

const pink = document.createElement('div');
pink.classList.add('pink');
pink.style = 'border: 2px solid black; background: pink;';

const pinkChild = document.createElement('h1');
pinkChild.classList.add('pinkChild');
pinkChild.textContent = 'im in a div';

const pinkChild2 = document.createElement('p');
pinkChild2.classList.add('pinkChild2');
pinkChild2.textContent = 'Me too!'

pink.appendChild(pinkChild);
pink.appendChild(pinkChild2)

container.appendChild(pink)

