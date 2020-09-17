const haalElement = (id) => document.getElementById(id);


const openRed = () => {
  console.log("Goedemorgen, Lin Ny");
  document.getElementsByName("body").style.backgroundColor = " #e60000";
}
const openMenu = () => {
  haalElement('navigation-toggle')
    .style
    .visibility = 'visible';
}
const voegClickElementToe = (id, functieverwijzing) => {
  haalElement(id).addEventListener('click', functieverwijzing)
}
voegClickElementToe("nav-menu", openMenu);

voegClickElementToe("nav-toggle-red", openRed);


