
-- Тестовые данные для FinanceManager

PRAGMA foreign_keys = ON;


INSERT INTO Users (user_id, username, email) VALUES
(1, 'alex_ivanov', 'alex@example.com'),
(2, 'maria_petrova', 'maria@example.com');


INSERT INTO Categories (category_id, name, description) VALUES
(1, 'Зарплата', 'Поступления заработной платы'),
(2, 'Продукты', 'Покупка продуктов питания'),
(3, 'Транспорт', 'Расходы на транспорт'),
(4, 'Развлечения', 'Досуг и развлечения'),
(5, 'Подработка', 'Дополнительный доход');


INSERT INTO Transactions
(transaction_id, amount, description, date, type, user_id, category_id)
VALUES
(1, 75000.00, 'Заработная плата', '2026-10-01', 'income', 1, 1),
(2, 4500.00, 'Покупка продуктов', '2026-10-03', 'expense', 1, 2),
(3, 1200.00, 'Проездной билет', '2026-10-05', 'expense', 1, 3),
(4, 3500.00, 'Поход в кино', '2026-10-07', 'expense', 2, 4),
(5, 12000.00, 'Выполнение заказа', '2026-10-10', 'income', 2, 5),
(6, 2800.00, 'Покупка продуктов', '2026-10-12', 'expense', 2, 2);
