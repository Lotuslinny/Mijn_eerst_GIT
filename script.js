// " Dit is mijn eerste GIT Actie!!!"

//Helpersfunctie bovenaan
const haalElement = (id) => document.getElementById(id);

const openMenu = () => {
  haalElement('navigation-toggle').style.visibility = 'visible';
}

const closeMenu = () => {
  haalElement('navigation-toggle').style.visibility = 'hidden';

}

// Met named function met parenthesis

const openRed = () => {
  document
    .body
    .style
    .backgroundColor = '#e60000';
}
const openBlue = () => {
  document
    .body
    .style
    .backgroundColor = '#00b8e6';
}
const openGreen = () => {
  document
    .body
    .style
    .backgroundColor = '#2eb82e';
}
const openYellow = () => {
  document
    .body
    .style
    .backgroundColor = '#ffff00';
}
const openBrown = () => {
  document
    .body
    .style
    .backgroundColor = '#332600';
}
//addClickToElement
const addClickToElement = (id, click, func) => {
  haalElement("nav-menu").addEventListener("click", openMenu);

}

haalElement("nav-menu")
  .addEventListener("click", openMenu);
haalElement('nav-toggle-red')
  .addEventListener('click', openRed);
haalElement('nav-toggle-blue')
  .addEventListener('click', openBlue);
haalElement('nav-toggle-green')
  .addEventListener('click', openGreen);
haalElement('nav-toggle-yellow')
  .addEventListener('click', openYellow);
haalElement('nav-toggle-brown')
  .addEventListener('click', openBrown);

const removeClickFromElement = (id, click, func) => {
  haalElement("navigation-toggle").addEventlistener('click', closeMenu);
}
haalElement("navigation-toggle")
  .addEventListener("click", closeMenu);

  //hallo Git//