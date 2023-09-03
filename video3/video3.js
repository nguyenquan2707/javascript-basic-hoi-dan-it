
function onShow() {
   let contentElement = window.document.getElementById("content");
   contentElement.style.display = 'block';
}

function onHide() {
   let currentElement = window.document.getElementById("content");
   currentElement.style.display = 'none';
}
function onChangeSize() {
   console.log("Goo here");
   let currentElement = window.document.getElementById("demo");
   currentElement.style.fontSize = '50px';
}


function turnOn() {

   let imageElement = document.getElementById("light");
   imageElement.src = "./assets/on.gif";
}

function turnOff() {

    let imageElement = document.getElementById("light");
    imageElement.src = "./assets/off.gif";
 }
 


