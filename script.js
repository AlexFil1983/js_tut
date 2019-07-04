let money, time;

function detectDayBudget() {
   money = +prompt('Ваш бюджет на месяц?', ''); 
   while(isNaN(money)|| money == "" || money == null) {
 money = +prompt('Ваш бюджет на месяц?', ''); 
alert("Ваш бюджет на день: "+ appData.moneyPerDay );
}
}
detectDayBudget();


function start() {
    time = +prompt('Введите дату  в формате YYYY-MM-DD', '')
};

start();

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: true,
    expenses: {}
};

function chooseExpenses() {
 for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Восколько обойдется?', '');
if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!= '' && a.length < 50)  
{
    console.log('Done');
    appData.expenses[a] = b;
}
else {
        }
    }   
}

chooseExpenses();


appData.moneyPerDay = (appData.budget/30).toFixed();


function detectLevel() {
 if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}   
}



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    appData.optionalExpenses[1] = +prompt("Статья необязательных расходов?", '');
    appData.optionalExpenses[2] = +prompt("Статья необязательных расходов?", '');
    appData.optionalExpenses[3] = +prompt("Статья необязательных расходов?", '');
};

chooseOptExpenses();
