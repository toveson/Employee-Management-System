// required packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table')


const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'Clear2020',
    database: 'EmployeeManagment_DB'
});

connection.connect(function(err) {
    if (err) throw err;
});

// CLI stuff


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
// Delete employess
// View total salary of all department members (one total not each person in the department)