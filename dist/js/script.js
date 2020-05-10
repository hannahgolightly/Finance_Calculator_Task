var calculateButton = document.querySelector('.button');
var resultsBox = document.querySelector('.results');
var errorBox = document.querySelector('.error');
var numberCheck = RegExp(/\d/);
var expectedSalaryInput = document.querySelector('#salaryExp');
var monthlyPercentInput = document.querySelector('#monthlyRepayment');
var borrowInput = document.querySelector('#borrow');
//when calculate button clicked, triggers event listener
calculateButton.addEventListener('click', function (e) {
    e.preventDefault();
    //if input fields not filled out then alert is triggered.
    if (expectedSalaryInput.value == "" || monthlyPercentInput.value == "" || borrowInput.value == "") {
        printError(resultsBox, errorBox, "Please fill in all fields");
        return;
    }
    if (!numberCheck.test(expectedSalaryInput.value) || !numberCheck.test(monthlyPercentInput.value) || !numberCheck.test(borrowInput.value)) {
        printError(resultsBox, errorBox, "Error: you must enter a number");
        return;
    }
    //parseFloat converts the value from a string to a float
    var expectedSalary = parseFloat(expectedSalaryInput.value);
    var monthlyPercent = parseFloat(monthlyPercentInput.value);
    var borrow = parseFloat(borrowInput.value);
    //checking the amount to borrow is between £0-8000, or triggers error
    if (borrow < 0 || borrow > 8000) {
        printError(resultsBox, errorBox, "Error: You can only borrow between £0-8000");
        return;
    }
    //checking the monthly repayment % is between 0-100, or triggers error
    if (monthlyPercent < 10 || monthlyPercent > 100) {
        printError(resultsBox, errorBox, "Error: The monthly percentage must be between 10-100%");
        return;
    }
    //checking the expected salary is between £0-100000, or triggers error
    if (expectedSalary < 0 || expectedSalary > 100000) {
        printError(resultsBox, errorBox, "Error: Expected salary must be between £0-100000");
        return;
    }
    var calculatedRepayment = calcRepayment(borrow);
    var totalMonth = totalMonths(expectedSalary, calculatedRepayment, monthlyPercent);
    printResult(calculatedRepayment, totalMonth, adminFee(borrow));
});