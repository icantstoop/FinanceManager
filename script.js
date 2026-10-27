
function addTransaction() {
    const transactionInput = document.getElementById('transactionInput');
    const transactionType = document.getElementById('transactionType');
    const transactionText = transactionInput.value.trim();

    
    if (transactionText === '') {
        alert('Введите описание дохода или расхода!');
        return;
    }

    
    const transactionList = document.getElementById('transactionList');
    const li = document.createElement('li');
    const span = document.createElement('span');

    const typeText = transactionType.value === 'income'
        ? 'Доход'
        : 'Расход';

    span.textContent = typeText + ': ' + transactionText;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    transactionList.appendChild(li);

    
    transactionInput.value = '';
    transactionInput.focus();
}
