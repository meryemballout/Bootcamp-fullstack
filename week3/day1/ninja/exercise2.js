// Function to calculate the average of grades
function calculateAverage(gradesList) {
  let sum = 0;
  for (let grade of gradesList) {
    sum += grade;
  }
  const average = sum / gradesList.length;
  return average;
}

// Function to check if the student passed or failed based on average
function findAvg(gradesList) {
  const avg = calculateAverage(gradesList);
  console.log(`Average grade: ${avg.toFixed(2)}`);
  
  if (avg >= 65) {
    console.log("Congratulations! You passed the course.");
  } else {
    console.log("Sorry, you failed. You must repeat the course.");
  }
}

// Example usage
const grades = [75, 60, 80, 90, 55];
findAvg(grades);
