import About1 from './about1.jpg';
import About2 from './about2.jpg';
import About3 from './about3.jpg';
import About4 from './about4.jpg';


export default function aboutSection() {

    // Changing About Color to Orange; 
    const aboutLi = document.getElementById('headerLiAbout');
    aboutLi.style.color = '#F14C0B';

    // Creating a Div 
    const aboutDiv = document.createElement('div');
    aboutDiv.id = "aboutDiv";

    // Creating a left Div for random pictures;

    const leftDiv = document.createElement('div')
    leftDiv.id = 'aboutLeftDiv';

    const aboutOne = new Image();
    aboutOne.src = About1;

    const aboutTwo = new Image();
    aboutTwo.src = About2;

    const aboutThree = new Image();
    aboutThree.src = About3;

    const aboutFour = new Image();
    aboutFour.src = About4;

    const imageArray = [aboutOne, aboutTwo, aboutThree, aboutFour];

    let i = 0
    while (i < 4) { // Creating boxes and appending an image into each box
        const box = document.createElement('box');
        box.id = (i + 1) + "_Box";
        box.appendChild(imageArray[i]);
        leftDiv.appendChild(box);
        i++;
    }

    aboutDiv.appendChild(leftDiv);

    // Creating a right Div
    const rightDiv = document.createElement('div');
    rightDiv.id = 'aboutRightDiv';

    // About text
    const aboutGrid = document.createElement('div');
    aboutGrid.className = "aboutGrid";
    rightDiv.appendChild(aboutGrid)

    const aboutSpan = document.createElement('span');
    aboutSpan.textContent = "About Us";

    aboutSpan.id = 'aboutSpan';
    aboutGrid.appendChild(aboutSpan);

    const aboutContent = document.createElement('p');
    aboutContent.id = 'aboutContent';
    aboutContent.textContent = "At erat pellentesque adipiscing commodo elit at imperdiet dui. Urna nunc id cursus metus aliquam eleifend mi in. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Volutpat diam ut venenatis tellus in. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Ut eu sem integer vitae justo eget magna fermentum.";
    aboutGrid.appendChild(aboutContent);

    // Hours of operation section
    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hoursDiv'
    rightDiv.appendChild(hoursDiv);

    const hourSpan = document.createElement('span');
    hourSpan.id = 'hourSpan';
    hourSpan.textContent = "Hours of operation";
    hoursDiv.appendChild(hourSpan);

    // This div's children will consist of every day the restaurant is open 
    const hoursGrid = document.createElement('div');
    hoursGrid.className = 'hoursGrid';

    hoursDiv.appendChild(hoursGrid);

    // Creating a object for the operatings days 
    function Day(name, open, close) {

        this.name = name;
        this.open = open;
        this.close = close;

        const dayGrid = document.createElement('div')
        dayGrid.className = 'dayGrid';

        const dayName = document.createElement('span');
        dayName.id = 'dayName';
        dayName.textContent = this.name;

        const openDay = document.createElement('p');
        openDay.id = 'open';
        openDay.textContent = this.open;

        const closeDay = document.createElement('p');
        closeDay.id = 'close';
        closeDay.textContent = this.close;


        const dayItems = [dayName, openDay, closeDay];

        for (let i = 0; i < dayItems.length; i++) {
            dayGrid.appendChild(dayItems[i]);
        }
        
        hoursGrid.appendChild(dayGrid);
    }

    // Creating day objects
    const sunday    = new Day('Sunday', "11:00", "22:00");
    const monday    = new Day('Monday', "10:00", "22:00");
    const tuesday   = new Day('Tuesday', "10:00", "22:00");
    const wednesday = new Day('Wednesday', "10:00", "22:00");
    const thursday  = new Day('Thursday', "10:00", "22:00");
    const friday    = new Day('Friday', "10:00", "22:00");
    const saturday  = new Day('Sunday', "11:00", "22:00");

    aboutDiv.appendChild(rightDiv);

    return aboutDiv;

}