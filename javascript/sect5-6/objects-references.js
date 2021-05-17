let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

//resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses
let getAccountSummary = function (account) {
    console.log("Name of the account is " + account.name)
    console.log("Income on the account is " + account.income)
    console.log("Expenses on the account are in total " + account.expenses)
}


// addIncome
addIncome(myAccount, 1000)
// addExpense
addExpense(myAccount, 70)
// addExpense
addExpense(myAccount, 30)
// getAccountSummary
getAccountSummary(myAccount)
// resetAccount
resetAccount(myAccount)
// getAccountSummary
getAccountSummary(myAccount)