// Liste des planètes avec leurs noms, couleurs et nombre de lunes
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// Sélection de la section dans laquelle on va ajouter les planètes
const section = document.querySelector('.listPlanets');

// Parcourir chaque planète
planets.forEach(planet => {
    // Créer un élément <div> pour la planète
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Ajouter les lunes autour de la planète
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        
        // Positionnement aléatoire autour de la planète
        const angle = Math.random() * 360;
        const distance = 50 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        moonDiv.style.left = `${50 + x}px`;
        moonDiv.style.top = `${50 + y}px`;

        planetDiv.appendChild(moonDiv);
    }

    // Ajouter la planète à la section
    section.appendChild(planetDiv);
});