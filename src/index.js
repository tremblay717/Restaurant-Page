import './style.css';

//Setting up the html
const element = document.createElement('div');
element.id = 'content';
element.textContent = 'test'
element.style.height = '50vh';
element.style.backgroundColor = 'green';
document.body.appendChild(element);