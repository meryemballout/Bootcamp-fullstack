const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// Filter students who passed the course
const passedStudents = students.filter(student => student.isPassed);

// Bonus: Congratulate each student who passed
passedStudents.forEach(student => {
  console.log(`Good job ${student.name}, you passed the course in ${student.course}.`);
});
