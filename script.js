let money = prompt('Ваш бюджет на месяц?', ''),
time = prompt('Введите дату  в формате YYYY-MM-DD', ''),
trata1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
price1 = prompt('Восколько обойдется?', ''),
trata2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
price2 = prompt('Восколько обойдется?', '');


let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: false,
    expenses: {}
};

appData.expenses.trata1 = price1;
appData.expenses.trata2 = price2;

alert("Ваш бюджет на день: "+ appData.budget/30);

