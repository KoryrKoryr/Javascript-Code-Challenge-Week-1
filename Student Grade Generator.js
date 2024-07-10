//Calculates the grade of a student based on their mark.
function calculateGrade() {
  // Prompt the user to enter the student's mark
  let mark = parseFloat(
    prompt("Enter the student's mark (between 0 and 100):")
  );
  let grade;

  // Determine the student's grade based on their mark
  if (mark > 79) {
    grade = "A";
  } else if (mark >= 60 && mark <= 79) {
    grade = "B";
  } else if (mark >= 50 && mark <= 59) {
    grade = "C";
  } else if (mark >= 40 && mark <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Return the student's grade
  return `The student's grade is: ${grade}`;
}

// Display the student's grade using an alert
alert(calculateGrade());
