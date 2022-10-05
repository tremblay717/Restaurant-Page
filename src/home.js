import SteakImg from './steak.jpg';

export default function homeSection() {

    // Changing Home Color to Orange; 
    const homeLi = document.getElementById('headerLiHome')
    homeLi.style.color = '#F14C0B';

    // Creating a Div 
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('style', 'display:flex;');
    homeDiv.id = 'homeDiv';

    // Left Part of Home Section
    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;');
    leftDiv.id = 'homeLeftDiv';

    const slogan = document.createElement('span');
    slogan.className = 'slogan';
    slogan.textContent = "Enjoy our excellents grills";
    leftDiv.appendChild(slogan);

    const subSloganOne = document.createElement('p');
    subSloganOne.className = 'subSlogan';
    subSloganOne.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    leftDiv.appendChild(subSloganOne);

    const subSloganTwo = document.createElement('p');
    subSloganTwo.className = 'subSlogan';
    subSloganTwo.textContent = "Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ornare suspendisse sed nisi lacus sed viverra. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Enim eu turpis egestas pretium aenean. Est ante in nibh mauris cursus mattis molestie a";
    leftDiv.appendChild(subSloganTwo);

    // Right Part of Home Section
    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('style', 'display:flex; flex-direction:column;width:50%;padding: 2%;');
    rightDiv.id = 'homeRightDiv';

    const steak = new Image();
    steak.src = SteakImg;

    rightDiv.appendChild(steak);

    homeDiv.appendChild(leftDiv);
    homeDiv.appendChild(rightDiv);

    return homeDiv;
}