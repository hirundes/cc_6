//Task 1 - Business Profit Calculation
    //function calculateProfit 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold; //formula for calculating profit
}
let profit = calculateProfit(20, 30, 100) //costPrice, sellingPrice, and unitsSold numbers
    //logged "Task 1" and total profit
console.log("Task 1")
console.log("   Business Total Profit: $", profit)
