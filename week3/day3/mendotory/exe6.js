let navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");
let newLi = document.createElement("li");
let logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);

let searchLi = navDiv.querySelector("ul");
searchLi.appendChild(newLi);


first_element = searchLi.firstElementChild;
console.log(first_element);
last_element = searchLi.lastElementChild;
console.log(last_element);
