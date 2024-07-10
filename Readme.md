# Phase 1 Code Challenge Week 1

=> 1st Challenge: Student Grade Generator//

- The code is a JavaScript function named calculateGrade(). This function prompts the user to enter a student's mark between 0 and 100. It then determines the student's grade based on their mark using conditional statements (if-else). The grade is assigned based on the following:

Mark > 79: Grade "A"
Mark >= 60 and Mark <= 79: Grade "B"
Mark >= 50 and Mark <= 59: Grade "C"
Mark >= 40 and Mark <= 49: Grade "D"
Mark < 40: Grade "E"

Finally, the function returns a string message displaying the student's grade. The result is displayed using an alert box.

=> 2nd Challenge: Speed Detector//

- The code is a JavaScript function that calculates the demerit points for a car based on its speed. The function calculateDemeritPoints takes a speed parameter and returns a string indicating the result.

- Constants are defined at the beginning of the function:
  speedLimit: The legal speed limit.
  kmPerDemeritPoint: The number of kilometers over the speed limit that result in one demerit point.
  pointsPerDemerit: The number of points for each demerit.
  maxPointsBeforeSuspension: The maximum number of demerit points before the driver's license is suspended.

- The function checks if the car's speed is less than or equal to the speed limit. If it is, the function returns the string "Ok".

- If the car's speed is greater than the speed limit, the function calculates the number of demerit points by subtracting the speed limit from the car's speed, dividing by kmPerDemeritPoint, and rounding down to the nearest whole number.

- The function then checks if the calculated demerit points exceed the maxPointsBeforeSuspension. If they do, the function returns the string "License suspended".

- If the calculated demerit points do not exceed the maxPointsBeforeSuspension, the function returns a string indicating the number of points, formatted as "Points: ${demeritPoints}".

- After defining the function, the code prompts the user to enter the car's speed using the prompt function and converts the input to an integer using parseInt.

- The calculateDemeritPoints function is called with the car's speed as an argument, and the result is displayed using the alert function.

=> 3rd Challenge: Net Salary Calculator//

- The code is a JavaScript program that calculates various deductions from an employee's salary, including tax, National Health Insuarance Fund (NHIF), and National Social Security Fund (NSSF). The program prompts the user to enter their basic salary and total benefits, then calculates the respective deductions and displays the results.

- Constants for tax rates, NHIF rates, and NSSF rate are defined.

- The program prompts the user to enter their basic salary and total benefits using the prompt function.

- The payee variable is calculated based on the basic salary and tax rates using an if-else statement.

- The nhifDeductions variable is calculated based on the basic salary and NHIF rates using a ternary operator.

- The nssfDeductions variable is calculated based on the basic salary and NSSF rate.

- The grossSalary variable is calculated by adding the basic salary and benefits.

- The netSalary variable is calculated by subtracting the payee, NHIF deductions, and NSSF deductions from the gross salary.

- The results are displayed using console.log statements.
