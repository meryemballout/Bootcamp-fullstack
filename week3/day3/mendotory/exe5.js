let containerDiv = document.getElementById('container');
console.log('Step 1 - container div:', containerDiv);


let firstList = document.querySelectorAll('ul.list')[0];
let peteLi = firstList.querySelectorAll('li')[1];
console.log('Step 2 - before change:', peteLi.textContent);
peteLi.textContent = 'Richard';
console.log('Step 2 - after change:', peteLi.textContent);


let secondList = document.querySelectorAll('ul.list')[1];
let secondLiSecondList = secondList.querySelectorAll('li')[1];
console.log('Step 3 - item to remove:', secondLiSecondList.textContent);
secondList.removeChild(secondLiSecondList);
console.log('Step 3 - second <ul> after removal:', secondList.innerHTML);


let lists = document.querySelectorAll('ul.list');
lists.forEach((ul, index) => {
  let firstLi = ul.querySelector('li');
  console.log(`Step 4 - before change in list ${index + 1}:`, firstLi.textContent);
  firstLi.textContent = 'meryem';
  console.log(`Step 4 - after change in list ${index + 1}:`, firstLi.textContent);
});


// part3

let all_elements_ul = document.querySelectorAll('ul');
console.log(all_elements_ul);
all_elements_ul.forEach(ul => {
  ul.classList.add('student_list');
  console.log(ul);
});


all_elements_ul[0].classList.add('university', 'attendance');
console.log(all_elements_ul[0]);

//part4

 containerDiv.style.backgroundColor = 'lightblue';


let firstListLi = firstList.querySelectorAll('li');
firstListLi[firstListLi.length - 1].style.display = 'none';
console.log(firstListLi[firstListLi.length - 1]);


let secondListLi = secondList.querySelectorAll('li');
secondListLi[1].style.border = '1px solid black';
console.log(secondListLi[1]);


document.body.style.fontSize = '20px';


if (containerDiv.style.backgroundColor === 'lightblue') {
  alert('Hello meryem and lucia');
}