const account = {
    name: 'Zach Eagan',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        totalExpenses = 0
        totalIncomes = 0
        this.expenses.forEach(expense => totalExpenses = totalExpenses + expense.amount)
        this.incomes.forEach(income => totalIncomes = totalIncomes + income.amount)
        return this.name + " has a balance of $" + (totalIncomes - totalExpenses) + ". $" + totalIncomes + " in income. $" + totalExpenses + " in expenses."
    }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())