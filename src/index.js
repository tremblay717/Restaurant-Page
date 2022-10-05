import './style.css';
import Icon from './icon.png';
import Icon2 from './icon2.png';

//Setting up the html
const element = document.createElement('div');
element.id = 'content';

const horn = new Image();
horn.className = 'hornImage'
horn.src = Icon;

const hornTwo = new Image();
hornTwo.className = 'hornImage';
hornTwo.src = Icon2;

const test = document.createElement('p');
// test.textContent = 'пошто је непоштовање и презирање права човека водило варварским';

test.textContent = 'hello'

element.appendChild(horn);
element.appendChild(hornTwo);
element.appendChild(test);
document.body.appendChild(element);