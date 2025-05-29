const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get values from inputs
  const name = document.getElementById("name").value.trim();
  const lastName = document.getElementById("lastName").value.trim();

  // Create JSON object
  const data = { name, lastName };

  // Convert to JSON string
  const jsonString = JSON.stringify(data);

  // Append JSON string to the output div
  const p = document.createElement("p");
  p.textContent = jsonString;
  output.appendChild(p);

  // Optional: clear inputs after submission
  form.reset();
});
