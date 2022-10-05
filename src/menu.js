export default function menuSection() {

    // Changing Home Color to Orange; 
    const homeLi = document.getElementById('headerLiMenu');
    homeLi.style.color = '#F14C0B';

    // Creating a Div 
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menuDiv';

    // Appetizer section
    const appetizers = document.createElement('div');
    appetizers.id = 'menuSectionDiv'
    appetizers.textContent = 'Appetizers';
    menuDiv.appendChild(appetizers)

    function AppetizerItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const appetizerGrid = document.createElement('div')
        appetizerGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            appetizerGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(appetizerGrid);


    }

    const nachos = new AppetizerItem('Nachos', 'A bowl of tortilla chips with a generous portion of queso cheese, jalapenos and red salsa.', 10);
    const onion = new AppetizerItem('Onion Rings', "Good ol' onions rings deep fried in a beer flavoured batter.", 8)
    const mozza = new AppetizerItem('Mozzarella Sticks', 'Deep fried mozzarella sticks with italian seasonned crumbs, served with a spicy marinara sauce.', 14)

    // Main course section
    const mainCourse = document.createElement('div');
    mainCourse.id = 'menuSectionDiv'
    mainCourse.textContent = 'Main Course';
    menuDiv.appendChild(mainCourse)

    function MainCourseItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const menuGrid = document.createElement('div')
        menuGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            menuGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(menuGrid);

    }

    const clasicHamburger = new MainCourseItem('Classic Hamburger', 'Enjoy a traditionnal hamburger with different toppings, including lettuce, sliced tomato, ketchup, mayo. Comes with french fries or salad', 15)
    const steakFrites = new MainCourseItem('Steak Frites', 'Dish consisting of steak paired with French fries. It is commonly served in European brasseries, and is considered by some to be the national dish of Belgium, which claims to be the place of its invention.', 30)
    const garlicButterSteak = new MainCourseItem('Garlic-Butter Steak', 'Made in a skillet, this garlic butter steak is one our old time classics! Comes with a generous portion of mashed potatoes', 25);
    const caesarSalad = new MainCourseItem('Caesar Salad', 'For a lighter course, we suggest you try our homemade Caesar Salad, made with fresh roman lettuce, bacon, bread crumbs.', 18)
    const ribeye = new MainCourseItem('Grilled Marinated Ribeye', "Our regulars' favorite meal! We let sit, from local beef producers, ribeyes, in tangy, barbecue-inspired marinade overnight. We grill up the ribeye to your convenience. Comes with french fries or a salad.", 35)


    // Drink sections
    const drinks = document.createElement('div');
    drinks.id = 'menuSectionDiv'
    drinks.textContent = 'Drinks';
    menuDiv.appendChild(drinks)

    function DrinkItem(name, description, price) {

        this.name = name;
        this.description = description;
        this.price = price;

        const menuGrid = document.createElement('div')
        menuGrid.className = 'menuGrid';

        const itemName = document.createElement('span');
        itemName.id = 'itemName';
        itemName.textContent = this.name;

        const itemDescription = document.createElement('p');
        itemDescription.id = 'itemDescription';
        itemDescription.textContent = this.description;

        const itemPrice = document.createElement('span');
        itemPrice.id = 'itemPrice';
        itemPrice.textContent = "$ " + this.price;

        const menuItems = [itemName, itemDescription, itemPrice];

        for (let i = 0; i < menuItems.length; i++) {
            menuGrid.appendChild(menuItems[i]);
        }

        menuDiv.appendChild(menuGrid);

    }

    const softDrinks = new DrinkItem('Soft Drinks', "Various selection of soft drinks : Coca-Cola, Pepsi, Sprite, Doctor Pepper, etc.", 1.25)
    const budweiser = new DrinkItem('Budweiser', "For the tasteless person.", 5);
    const busch = new DrinkItem('Busch', 'Start your morning with a fresh Busch Latte.', 5);
    const samuelAdams = new DrinkItem('Samuel Adams', "For the American Patriot!", 6)


    return menuDiv;
}