 const employees = [
    { name : "Alice", hoursWorked: 40, hourlyRate: 15 },
    { name : "Bob", hoursWorked: 35, hourlyRate: 20 },
    { name : "Charlie", hoursWorked: 45, hourlyRate: 25 } ,
    { name : "Danny", hoursWorked: 45, hourlyRate: 50 } ,

];

function calculateBasePayroll(employees) {
    return employees.map(employee => ({
        name: employee.name,
        basePayroll: employee.hoursWorked * employee.hourlyRate 
    }));
}

function calculateOvertimePay(rate, hours) {
    if (hours <= 40) return 0;
    const overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
}

function regularPay(rate, hours) {
    if (hours <= 40) return hours * rate;

  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}


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


employees.forEach(employee => {
  const payroll = processPayroll(employee);
  console.log(payroll);
});