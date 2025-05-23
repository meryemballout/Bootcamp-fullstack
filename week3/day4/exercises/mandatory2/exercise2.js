setTimeout(() => alert("Hello World"), 2000);

const addParagraph = () => {
    const container = document.getElementById("container");
    const paragraphe = "<p>Hello World</p>";
    container.innerHTML = paragraphe;
}

setTimeout(addParagraph, 2000);

const interval = setInterval(() => {
    const container = document.getElementById("container");
    const paragraphe = "<p>Hello World</p>";
    
    const paragraphs = container.getElementsByTagName("p");
    if (paragraphs.length < 5)
        container.innerHTML += paragraphe;
    else
        clearInterval(interval);
}
, 2000);

document.getElementById("clear").addEventListener("click", () => clearInterval(interval));