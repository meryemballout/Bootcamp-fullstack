// Part I
setTimeout(function () {
  alert("Hello World");
}, 2000);

// Part II
setTimeout(function () {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

// Part III
const container = document.getElementById("container");
const btnClear = document.getElementById("clear");


function addParagraph() {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);

  
  if (container.querySelectorAll("p").length >= 5) {
    clearInterval(intervalId);
    console.log("Interval cleared after 5 paragraphs.");
  }
}

// Start the interval
const intervalId = setInterval(addParagraph, 2000);

// Listen for button click to clear the interval
btnClear.addEventListener("click", function () {
  clearInterval(intervalId);
  console.log("Interval cleared by button click.");
});
