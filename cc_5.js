// Step 2: Employee array
const employees = [
  { name: "Alice", hoursWorked: 40, hourlyRate: 15 },
  { name: "Bob", hoursWorked: 35, hourlyRate: 20 },
  { name: "Charlie", hoursWorked: 45, hourlyRate: 25 },
  { name: "Danny", hoursWorked: 45, hourlyRate: 50 }
];

// Step 3: Base pay calculation (up to 40 hours)
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return baseHours * rate;
}

// Step 4: Overtime pay calculation (1.5x for hours > 40)
function calculateOvertimePay(rate, hours) {
  if (hours <= 40) return 0;
  const overtimeHours = hours - 40;
  return overtimeHours * rate * 1.5;
}

// Step 5: Tax calculation (15%)
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Step 6: Payroll processing for one employee
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

// Step 7: Loop through employees and log payroll
employees.forEach(employee => {
  const payroll = processPayroll(employee);
  console.log(payroll);
});

// Optional: Print a nice table
console.table(employees.map(processPayroll));
