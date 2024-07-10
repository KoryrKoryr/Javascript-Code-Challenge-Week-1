// Define KRA, NHIF, and NSSF values
const taxRates = {
  low: 10,
  medium: 15,
  high: 20,
};

const nhifRates = {
  low: 500,
  high: 1000,
};

const nssfRate = 6;

// Prompt user for input
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter the total benefits:"));

// Calculate Payee (Tax)
let payee;
if (basicSalary <= 24000) {
  payee = basicSalary * (taxRates.low / 100);
} else if (basicSalary > 24000 && basicSalary <= 32333) {
  payee = basicSalary * (taxRates.medium / 100);
} else {
  payee = basicSalary * (taxRates.high / 100);
}

// Calculate NHIF Deductions
const nhifDeductions = basicSalary <= 20000 ? nhifRates.low : nhifRates.high;

// Calculate NSSF Deductions
const nssfDeductions = basicSalary * (nssfRate / 100);

// Calculate Gross Salary
const grossSalary = basicSalary + benefits;

// Calculate Net Salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Display the results
console.log("Payee (Tax): " + payee);
console.log("NHIF Deductions: " + nhifDeductions);
console.log("NSSF Deductions: " + nssfDeductions);
console.log("Gross Salary: " + grossSalary);
console.log("Net Salary: " + netSalary);
