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

