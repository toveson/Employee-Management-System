USE EmployeeManagment_DB;

INSERT INTO department (name)
VALUES ('accounting'), ('sales'), ('installs');

INSERT INTO role (title, salary, department_id)
VALUES ('manager', 1000, 1), ('sales_manager', 1000, 2), ('tech_manager', 1000, 3), ('sales_associate', 750, 2), ('tech', 750, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Prinz', 'Gomme', 1), ('Baxy', 'Farrall', 2), ('Ursula', 'Jest', 2), ('Letty', 'Lovell', 3), ('Jeanie', 'Bleasdille', 4), ('Hynda', 'Sambiedge', 4), ('Inge', 'Matterson', 4), ('Zulema', 'Bentame', 4), ('Hastings', 'Brower', 4), ('Hastings', 'Brower', 4), ('Karil', 'Rubinsztein', 5), ('Austina', 'Solan', 5);