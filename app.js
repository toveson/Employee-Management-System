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