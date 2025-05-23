parent_article = document.querySelector("article");
child_h1 = parent_article.querySelector("h1");
console.log(child_h1);

const paragraphs = parent_article.querySelectorAll("p");

parent_article.removeChild(paragraphs[paragraphs.length - 1]);

console.log(parent_article);

parent_article.querySelector("h2").addEventListener("click", () => {
  parent_article.querySelector("h2").style.backgroundColor = "red";
});

parent_article.querySelector("h3").addEventListener("click", () => {
  parent_article.querySelector("h3").hidden = true;
});

parent_article.querySelector("button").addEventListener("click", () => {
  const paragraphs = parent_article.querySelectorAll("p");

  paragraphs.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});


parent_article.querySelector("h1").addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 100);
  parent_article.querySelector("h1").style.fontSize = `${randomSize}px`;
});

