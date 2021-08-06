let salary;
let house;
let mortgage;
let interest;
let time;
let ypayment;
let mpayment;

function calculateBudget(){
    salary = document.getElementById("salary").value;
    document.getElementById("fifty").innerHTML = "Needs: $" + (salary*.5).toFixed(2);
    document.getElementById("thirty").innerHTML = "Wants: $" + (salary*.3).toFixed(2);
    document.getElementById("twenty").innerHTML = "Savings/Investments: $" + (salary*.2).toFixed(2);
}

function calculateMortgage(){
    house = document.getElementById("price").value;
    mortgage = house*.8;
    interest = document.getElementById("interest").value/100;
    time = document.getElementById("time").value;
    ypayment = mortgage*[interest*(1+interest)**time]/[(1+interest)**time-1];
    document.getElementById("ypayment").innerHTML = "Annual Payment: $" + ypayment.toFixed(2);
    mpayment = ypayment/12;
    document.getElementById("mpayment").innerHTML = "Monthly Payment: $" + mpayment.toFixed(2); 
}