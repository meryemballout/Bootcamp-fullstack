
let shoppingList = [];

const root = document.getElementById('root');


const form = document.createElement('form');

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter item';

const addButton = document.createElement('button');
addButton.type = 'submit';
addButton.textContent = 'AddItem';

form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);

const list = document.createElement('ul');
root.appendChild(list);

const clearButton = document.createElement('button');
clearButton.textContent = 'ClearAll';
root.appendChild(clearButton);

function addItem(event) {
  event.preventDefault(); 

  const newItem = input.value.trim();
  if (newItem !== '') {
    shoppingList.push(newItem);
    input.value = '';
    renderList();
  }
}

function clearAll() {
  shoppingList = [];
  renderList();
}


function renderList() {
  list.innerHTML = '';
  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

form.addEventListener('submit', addItem);
clearButton.addEventListener('click', clearAll);
