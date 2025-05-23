
let allBoldItems = [];


function getBoldItems() {
    const boldItems = document.querySelectorAll("strong"); 
    console.log(boldItems); 
    allBoldItems = Array.from(boldItems); 
}


function highlight() {
    bottomItemColor("blue");
}


function returnItemsToDefault() {
    bottomItemColor("black");
}


function bottomItemColor(color) {
    allBoldItems.forEach(element => {
        element.style.color = color;
    });
}


getBoldItems();


allBoldItems.forEach(element => {
    element.addEventListener("mouseover", highlight); 
    element.addEventListener("mouseout", returnItemsToDefault); 
});


       



 

