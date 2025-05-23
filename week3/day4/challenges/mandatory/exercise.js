document.getElementById('libform').addEventListener('submit', function(event) {
    event.preventDefault();

    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    console.log(noun, adjective, person, verb, place);
    if (!noun || !adjective || !person || !verb || !place) {
        console.error('All fields must be filled out!');
        alert('Please fill out all the fields.');
        return;
    }

   const story = `${person} decided to visit the ${place} where a ${adjective} ${noun} was known to ${verb} like no other. It was an unforgettable day!`;
document.getElementById('story').textContent = story;

});