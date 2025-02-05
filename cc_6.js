//Task 1 - Business Profit Calculation
    //function calculateProfit 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; //formula for calculating profit
    return profit;
}
let profit = calculateProfit(20, 30, 100) //costPrice, sellingPrice, and unitsSold numbers
    //logged "task 1" and total profit
console.log("Task 1")
console.log("   Business Total Profit: $", profit) 
