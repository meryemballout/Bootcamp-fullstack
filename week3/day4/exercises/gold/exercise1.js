const select = document.getElementById('genres');
console.log("Initially selected:", select.value);

const newOption = new Option("Classic", "classic");
newOption.selected = true;
select.appendChild(newOption);

console.log("After adding 'Classic':", select.value);