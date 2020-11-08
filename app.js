// required packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table')

// mySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'Clear2020',
    database: 'EmployeeManagment_DB'
});

// connectiong to mySQL
connection.connect(function(err) {
    if (err) throw err;
    console.log(err);
});

// CLI stuff
function start () {
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
                switch (userChoice.action) {
                    case 'Add depmartment, role or employee':
                        // function to add
                        break;
                    case 'View depmartment, role or employee':
                        // function to view
                        break;
                    case 'Update depmartment, role or employee':
                        // function to update
                        break;
                }
            });
        }

// needed

// Add department
// Add roles
// Add employees
// View department
// View roles
// View employees
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

// start the questions!!!!
start();