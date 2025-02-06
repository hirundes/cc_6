//Task 1 - Business Profit Calculation
    //function calculateProfit 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold; //formula for calculating profit
}
let profit = calculateProfit(20, 30, 100); //costPrice, sellingPrice, and unitsSold numbers
    //logged "Task 1" and total profit
console.log("Task 1");
console.log("   Business Total Profit: $", profit);

//Task 2 - Sales Tax Computation
    //function calculateSalesTax
function calculateSalesTax(amount, taxRate) {
    return (amount * taxRate) //formula for calculating sales tax
}
let salesTax = calculateSalesTax(100, 0.07); //amount and taxRate
    //logged "Task 2" and sales Tax
console.log("Task 2");
console.log("   Sale Tax: $", salesTax);

//Task 3 - Employee Bonus Calculation
    //arrow function for calculateBonus
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating = "Excellent") {      //Excellent = Bonus: 20%  of salary returned
        return 0.20 * salary
    }
    if (performanceRating = "Good") {           //Good = Bonus: 10% of salary returned
        return 0.10 * salary 
    }
    if (performanceRating = "Average")          //Average = Bonus: 5% of salary returned
        return 0.05 * salary
};
let bonus = calculateBonus(5000, "Good"); //defining bonus with salary and performance rating
//Logged "Task 3" and Bonus
console.log("Task 3");
console.log("   Bonus: $", bonus);



