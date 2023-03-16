DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  department_id INT PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  department_name VARCHAR(30)
);

CREATE TABLE role (
    role_id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT FOREIGN KEY
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20), 
    role_id INT FOREIGN KEY,
    manager_id INT
);