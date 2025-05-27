(function makeJuice(sizeDrink) {
  let ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${sizeDrink} juice, containing ${ingredients.join(', ')}.`;
    // console.log(sentence);
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = sentence;
    body.appendChild(p);
  }

  addIngredients("apple", "orange", "banana");
  addIngredients("kiwi", "mango", "pineapple");

  displayJuice();

})("medium");