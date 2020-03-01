//ne brise se vrednost iz income, expenses kada obrisem list item


let select = document.querySelector('#choose-buget');
let inputDesc = document.querySelector('#expense-input');
let inputAmount = document.querySelector('#amount-input');
let btnCalc = document.querySelector('#expense-submit');
let budgetFeedback = document.querySelector(".budget-feedback");
let amountFeedback = document.querySelector(".amount-feedback");

let allIncome = document.querySelector('#income');
let allExpense = document.querySelector('#expense');
let percent = document.querySelector('#percent')

let month = document.querySelector('#month');
let budget = document.querySelector('#budget');


let outputIncome = document.querySelector('#item-list-income');
let outputEx = document.querySelector('#item-list-ex');

let itemIdIncome = 0;
let itemListIncome = [];


let itemIdExpenses = 0;
let itemListExpenses = [];


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
//   const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);


let date = new Date();
month.innerHTML = ` in ${monthNames[date.getMonth()]}  ${date.getFullYear()}`;

btnCalc.addEventListener('click', addIncome);

function addIncome(e) {
    e.preventDefault();

    if (select.value == "income") {

        let descript = inputDesc.value;
        inputDesc.value = '';
        let amountValue = inputAmount.value;
        inputAmount.value = '';
        if (descript.trim === '' || amountValue <= 0) {
            budgetFeedback.classList.add('showItem');
            budgetFeedback.innerHTML = `<span>Value cannot be empty</span>`;
            amountFeedback.classList.add('showItem');
            amountFeedback.innerHTML = `<span>Value cannot be null or negativ</span>`;
            setTimeout(function () {
                budgetFeedback.classList.remove('showItem');
                amountFeedback.classList.remove('showItem');
            }, 3000)
        } else {
            // let li = document.createElement('li');
            // li.innerHTML = `Your income : ${descript} is: ${amountValue}`;
            // li.className = "list-group-item list-group-item-success";
            // outputIncome.appendChild(li);

            // let del = document.createElement('button');

            // del.addEventListener('mouseover', deleteItem);
            // del.innerHTML = `Trash <i class="fa fa-trash-o"></i>`;
            // del.style.float = "right";

            // li.appendChild(del);

            let amount = parseInt(amountValue);

            let income = {
                id: itemIdIncome,
                amount: amount,
                descript: descript
            }

            itemIdIncome++;
            itemListIncome.push(income)
            console.log(itemListIncome);

            outputIncome.innerHTML = '';
            
            itemListIncome.forEach(incomeTemplete)

            allIncome.innerHTML = '';
            let addIncome = document.createElement('div');
            addIncome.style.float = "right";
            addIncome.innerHTML = itemListIncome.reduce(reduceSum, 0);
            allIncome.appendChild(addIncome);
            console.log(addIncome);

        }

    } else if (select.value == "expenses") {

        let descript = inputDesc.value;
        inputDesc.value = '';
        let amountValue = inputAmount.value;
        inputAmount.value = '';
        if (descript.trim === '' || amountValue <= 0) {
            budgetFeedback.classList.add('showItem');
            budgetFeedback.innerHTML = `<span>Value cannot be empty</span>`;
            amountFeedback.classList.add('showItem');
            amountFeedback.innerHTML = `<span>Value cannot be null or negativ</span>`;
            setTimeout(function () {
                budgetFeedback.classList.remove('showItem');
                amountFeedback.classList.remove('showItem');
            }, 3000)
        } else {
            let amount = parseInt(amountValue);
            // itemListExpenses.push(amount)
            // console.log(itemListExpenses);
            let expense = {
                id: itemIdExpenses,
                amount: amount,
                descript: descript,
                percentage:percentage(amount,calculateSum(itemListExpenses))
            }
            itemIdExpenses++;
            itemListExpenses.push(expense)
            console.log(itemListExpenses);

            // let li = document.createElement('li');
            outputEx.innerHTML = '';
            itemListExpenses.forEach(e => e.percentage = percentage(e.amount, itemListExpenses.reduce(reduceSum, 0)))
            itemListExpenses.forEach(expensesTemplate)
            // expensesTemplate(expense)


            // let percentigeValue = percentage(amountValue,calculateSum(itemListExpenses))
            // li.innerHTML = `Your expense: ${descript} is: ${amountValue} percentige ${percentigeValue}`;
            // li.className = "list-group-item list-group-item-danger";
            // outputEx.appendChild(li);

            // let del = document.createElement('button');

            // del.addEventListener('mouseover', deleteItem);
            // del.innerHTML = `Trash <i class="fa fa-trash-o"></i>`;
            // del.style.float = "right";

            // li.appendChild(del);

            // let expense = {
            //     id: itemIdExpenses,
            //     amount: amount,
            //     descript: descript
            // }

            // itemIdExpenses++;
            // itemListExpenses.push(expense.amount)
            // console.log(itemListExpenses);

            allExpense.innerHTML = '';
            let addExpenses = document.createElement('div');
            addExpenses.style.float = "right";
            addExpenses.innerHTML = itemListExpenses.reduce(reduceSum, 0);
            allExpense.appendChild(addExpenses);
            console.log(addExpenses);

        }
    }
    // let budgetAll = calculateSum(itemListIncome) - calculateSum(itemListExpenses);
    let budgetAll = itemListIncome.reduce(reduceSum,0) - itemListExpenses.reduce(reduceSum, 0)
    budget.innerHTML = budgetAll

}

function deleteItem(e) {
    // itemListExpenses.remove(e.target.expenseId)
    // itemListExpenses.forEach(expensesTemplate);
    e.target.parentElement.remove()
}

function calculateSum(elements) {
    let sum = 0;
    for (let index = 0; index < elements.length; index++) {
        sum += elements[index]
    }
    return sum;
}
function reduceSum(total,expense) {
    return total + expense.amount
}

function percentage(someValue, totalValue) {
    return someValue / totalValue * 100;
}

function expensesTemplate (expense){
    let li = document.createElement('li');
    li.innerHTML = `Your expense: ${expense.descript} is: ${expense.amount} percentige is ${expense.percentage} %`;
    li.className = "list-group-item list-group-item-danger";
    outputEx.appendChild(li);

    let del = document.createElement('button');

    del.addEventListener('mouseover', deleteItem);
    del.innerHTML = `Trash <i class="fa fa-trash-o"></i>`;
    del.expenseId = expense.id;
    del.style.float = "right";

    li.appendChild(del);

}

function incomeTemplete(income) {
    let li = document.createElement('li');
    li.innerHTML = `Your income: ${income.descript} is: ${income.amount} `;
    li.className = "list-group-item list-group-item-success";
    outputIncome.appendChild(li);

    let del = document.createElement('button');

    del.addEventListener('mouseover', deleteItem);
    del.innerHTML = `Trash <i class="fa fa-trash-o"></i>`;
    del.style.float = "right";

    li.appendChild(del);
    
}





