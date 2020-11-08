DROP DATABASE IF EXISTS EmployeeManagment_DB;
CREATE database EmployeeManagment_DB;

USE EmployeeManagment_DB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL  NOT NULL,
    department_id INT  NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT PRIMARY,
    first_name VARCHAR(30)  NOT NULL,
    lastname VARCHAR(30)  NOT NULL,
    role_id INT  NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);
