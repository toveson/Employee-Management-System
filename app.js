// required packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table')

// mySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Clear2020',
    database: 'EmployeeManagment_DB'
});

// connectiong to mySQL
connection.connect(function (err) {
    if (err) throw err;
    console.log(err);
    console.log('---connected---');

    // start the questions!!!!
    start();
});


// CLI stuff
function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'firstChoice',
            message: 'What do you want to do?',
            choices: [
                // add
                'Add depmartment, role or employee',

                // view
                // bonus View employess by manager
                // View total salary of all department members (one total not each person in the department)
                'View depmartment, role or employee',

                // update
                // bonus Update employee managers
                'Update depmartment, role or employee'

                // bonus
                // delete department, role employee
            ]
        }
    ]).then(function (userChoice) {
        console.log(userChoice)
        switch (userChoice.firstChoice) {
            case 'Add depmartment, role or employee':
                // function to choose what to add
                whatToAdd()
                break;
            case 'View depmartment, role or employee':
                // function to choose what to view
                whatToView();
                break;
            case 'Update depmartment, role or employee':
                // function to choose what to update
                whatToUpdate();
                break;
        }
    });
}

// needed

// what to add
function whatToAdd() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addChoice',
            message: 'What do you want to Add?',
            choices: [
                // Add
                'Add depmartment',
                'Add role',
                'Add employee'
            ]
        }
    ]).then(function (userChoice) {
        switch (userChoice.addChoice) {
            case 'Add depmartment':
                // function to Add departments
                addDepartment();
                break;
            case 'Add role':
                // function to Add roles
                addRole();
                break;
            case 'Add employee':
                // function to Add employees
                break;
        }
    });
}

// Add department
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What department would you like to add?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A Department is required.");
                }
                return true;
            }
        }
    ]).then(function (addDepartment) {
        connection.query('INSERT INTO department (name) VALUES (?);', [addDepartment.department], function (err, res) {
            if (err) throw err;
            console.log('---Added department---');
            start();
        });
    });
};

// Add roles
async function addRole() {
    var depts = await viewDepartment();
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What role would you like to add?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A role is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is their salary?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A role is required.");
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What deparment so they work in?',
            choices: depts,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A department is required.");
                }
                return true;
            }
        }
    ]).then(function (addRole) {
        console.log(addRole);
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?);', [addRole.role], function (err, res) {
            if (err) throw err;
            console.log('---Added role---');
            start();
        });
    });
};
// Add employees

// what to view
function whatToView() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'viewChoice',
            message: 'What do you want to View?',
            choices: [
                // View
                'View depmartment',
                'View role',
                'View employee'
            ]
        }
    ]).then(async function (userChoice) {
        switch (userChoice.viewChoice) {
            case 'View depmartment':
                // function to view departments
                var depts = await viewDepartment();
                console.table(depts);
                start();
                break;
            case 'View role':
                // function to view roles
                var roles = await viewRole();
                console.table(roles);
                start();
                break;
            case 'View employee':
                // function to view employees
                var employees = await viewEmployee();
                console.table(employees);
                start();
                break;
        }
    });
}


// View department
async function viewDepartment() {
    return new Promise((res, rej) => {
        connection.query('SELECT name, id AS value FROM department', function (err, results, fields) {
            if (err) throw err;
            res(results);
        });
    });
};
// View roles
async function viewRole() {
    return new Promise((res, rej) => {
        connection.query('SELECT name, id AS value FROM role', function (err, results, fields) {
            if (err) throw err;
            res(results);
        });
    });
};
// View employees
async function viewEmployee() {
    return new Promise((res, rej) => {
        connection.query('SELECT name, id AS value FROM employee', function (err, results, fields) {
            if (err) throw err;
            res(results);
        });
    });
};

// what to update
function whatToUpdate() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'updateChoice',
            message: 'What do you want to Update?',
            choices: [
                // Update
                'Update depmartment',
                'Update role',
                'Update employee'
            ]
        }
    ]).then(function (userChoice) {
        switch (userChoice.updateChoice) {
            case 'Update depmartment':
                // function to Update departments
                break;
            case 'Update role':
                // function to Update roles
                break;
            case 'Update employee':
                // function to Update employees
                break;
        }
    });
}
// update department
// update roles
// update employees

// bonus stuff

// Update employee managers
// View employess by manager
// Delete department
// Delete role
// Delete employees
// View total salary of all department members (one total not each person in the department)