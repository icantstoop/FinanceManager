
const STORAGE_KEY = 'financeManagerTransactions';

let transactions = [];

try {
    transactions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
} catch (error) {
    transactions = [];
}


function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}


function renderTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.replaceChildren();

    transactions.forEach(function (transaction) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        const typeText = transaction.type === 'income'
            ? 'Доход'
            : 'Расход';

        span.textContent = typeText + ': ' + transaction.text;

        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function () {
            deleteTransaction(transaction.id);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        transactionList.appendChild(li);
    });
}


function addTransaction() {
    const transactionInput = document.getElementById('transactionInput');
    const transactionType = document.getElementById('transactionType');
    const transactionText = transactionInput.value.trim();

    if (transactionText === '') {
        alert('Введите описание дохода или расхода!');
        return;
    }

    const transaction = {
        id: Date.now().toString() + Math.random().toString(16).slice(2),
        type: transactionType.value,
        text: transactionText
    };

    transactions.push(transaction);
    saveTransactions();
    renderTransactions();

    transactionInput.value = '';
    transactionInput.focus();
}


function deleteTransaction(id) {
    transactions = transactions.filter(function (transaction) {
        return transaction.id !== id;
    });

    saveTransactions();
    renderTransactions();
}


document.addEventListener('DOMContentLoaded', renderTransactions);
