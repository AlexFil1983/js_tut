let money, time;

function start() {
    money = prompt('Ваш бюджет на месяц?', '');
    while(isNaN(money)|| money == "" || money == null) 
    {
        money = +prompt('Ваш бюджет на месяц?', '');
        
    }
    // time = +prompt('Введите дату  в формате YYYY-MM-DD', '');
}

start();

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: true,
    expenses: {},
    chooseExpenses: function() 
    {
         for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Восколько обойдется?', '');
if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b!= '' && a.length < 50)  
{
    console.log('Done');
    appData.expenses[a] = b;
}
else    {
            i = i - 1; }
        } 
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(); 
        alert("Ваш бюджет на день: "+ appData.moneyPerDay );

    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) 
        {
            console.log("Минимальный уровень достатка");
        }        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) 
            {
                console.log("Средний уровень достатка");
            }    else if (appData.moneyPerDay > 2000) 
            {
                console.log("Высокий уровень достатка");
            } else 
        {
            console.log("Произошла ошибка");
        }  
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
for (i = 1 ; i <4; i++ ) {
        let optionExpense = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = optionExpense;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход?(Перечисли через запятую)', '');
        appData.income = items.split(', ');
    }
};





