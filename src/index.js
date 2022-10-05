import './style.css';
import Fork from './fork.png';
import Bbq from './bbq.jpg'
//Setting up the html


// This is the header bar
const headerBar = document.createElement('div');
headerBar.id = 'headerBar';

const leftHeader = document.createElement('div');

const restaurantTitle = document.createElement('span');
restaurantTitle.className = 'RestaurantTitle';
restaurantTitle.textContent = "Al's SteakHouse";

const rightHeader = document.createElement('div');










// Background Image for the landing page
const bbq = new Image();
bbq.src = Bbq;

leftHeader.appendChild(restaurantTitle)
headerBar.appendChild(leftHeader);
headerBar.appendChild(rightHeader);
document.body.appendChild(headerBar);



// Main section
const mainSection = document.createElement('div');
mainSection.id = 'mainSection';

document.body.appendChild(mainSection);

