import './style.css';
import Bbq from './bbq.jpg'
//Setting up the html
const element = document.createElement('div');
element.id = 'content';

const bbq = new Image();
bbq.src = Bbq;




document.body.appendChild(element);