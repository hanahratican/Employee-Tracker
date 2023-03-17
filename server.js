const express = require('express');
// why is the express not working?

const mysql = require('mysql2');

// const cTable = require('console.table');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  { 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeetracker_db'
  },
  console.log('Connected to the employeetracker_db')
);
db();

async function viewDepartments() {
  const results = await db.promise().query('SELECT * FROM department');
  console.table(results[0]);
  console.log('\n')
  promptUser();
};

async function viewAllRoles() {
  const results = await db.promise().query('SELECT * FROM role');
  console.table(results[0]);
  promptUser();
};

async function viewAllEmployees() {
  const results = await db.promis().query('SELECT * FROM employee');
  console.table(results[0]);
};

async function addDepartment() {
  const questions = await inquirer.prompt([{
    type: input,
    message: 'What do you want the name of your department to be?',
    name: 'addDepartment'
  }]) 
  if(questions) {
     const results = db.promise().query('INSERT INTO department(department_name) VALUES (?)', questions.addDepartment);
     console.table(results);
  }
  promptUser();
};

async function addRole() {
  const questions = await inquirer.prompt([{
    type: input,
    message: 'What do you want the name of your role to be?',
    name: 'addRole'
  }])
  if(questions) {
    const results = db.promise().query('INSERT INTO role (title) VALUES (?)', questions.addRole);
    console.table(results);
  }
  promptUser();
};

async function addEmployee() {
  const questions = await inquirer.prompt([{
    type: input,
    message: 'What is the name of the new employee?',
    name: 'addEmployee'
  }])
  if(questions) {
    const results = db.promise().query('INSERT INTO employee (first_name) VALUES (?)', questions.addEmployee);
    // how can I insert the first name and the last name?
    console.table(results);
  }
  promptUser();
};

  const promptUser = () => {
    inquirer.prompt ([
        {
            type: list,
            name: start,
            message: 'Choose what you would like to do:',
            choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role']
        },
    ])
    .then((response) => {
      console.log(response);
      if (response.start === "View all departments") {
        viewDepartments();
      };
      if(response.start === "Add a department") {
        addDepartment();
      };
      if(response.start === "View all roles") {
        viewAllRoles();
      };
      if(response.start === "View all employees") {
        viewAllEmployees();
      };
      if(response.start === "Add a role") {
        addRole();
      };
      if(response.start === "Add an employee") {
        addEmployee();
      };
    })
  };


  // recieving errors in the terminal, something may not be downloaded correctly. 