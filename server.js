const express = require('express');
// why is the express not working?

const mysql = require('mysql2');


const inquirer = require('inquirer');
// const { prompt } = require("inquirer");
//which one to use?

// const db = require("./db");

const db = mysql.createConnection(
  { 
    host: '127.0.0.1',
    // or use localhost?
    user: 'root',
    password: '',
    database: 'employeetracker_db'
  },
  console.log('Connected to the employeetracker_db')
);
db.connect(function (err) {
  if (err) throw err;
});

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

//code that the tutor helped with below

//use function on line 40 or line 44
// async function viewAllEmployees() {
//   const results = await db.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN manager ON manager.id = employee.manager_id');
//   console.table(results[0]);
// };

async function viewAllEmployees() {
  const results = await db.promise().query('SELECT * FROM employee');
  console.table(results[0]);
  promptUser();
};

async function addDepartment() {
  const questions = await inquirer.prompt([{
    type: 'input',
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
    type: 'input',
    message: 'What do you want the name of your role to be?',
    name: 'title'
  }])
  if(questions) {
    const results = db.promise().query('INSERT INTO role(title) VALUES (?)', questions.addRole);
    console.table(results);
  }
  promptUser();
};

async function addEmployee() {
  const questions = await inquirer.prompt([{
    type: 'input',
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
            type: 'list',
            name: 'start',
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

  promptUser();

//code that the tutor gave below

// .then(res => {
//   let choice = res.choice;
//   // Call the appropriate function depending on what the user chose
//   switch (choice) {
//     case "VIEW_EMPLOYEES":
//       viewEmployees();
//       break;
//     case "VIEW_EMPLOYEES_BY_DEPARTMENT":
//       viewEmployeesByDepartment();
//       break;
//     case "VIEW_EMPLOYEES_BY_MANAGER":
//       viewEmployeesByManager();
//       break;
//     case "ADD_EMPLOYEE":
//       addEmployee();
//       break;
//     }
// })




//       // View all employees that belong to a department
// function viewEmployeesByDepartment() {
//   db.findAllDepartments()
//     .then(([rows]) => {
//       let departments = rows;
//       const departmentChoices = departments.map(({ id, name }) => ({
//         name: name,
//         value: id
//       }));

//       prompt([
//         {
//           type: "list",
//           name: "departmentId",
//           message: "Which department would you like to see employees for?",
//           choices: departmentChoices
//         }
//       ])
//         .then(res => db.findAllEmployeesByDepartment(res.departmentId))
//         .then(([rows]) => {
//           let employees = rows;
//           console.log("\n");
//           console.table(employees);
//         })
//         .then(() => loadMainPrompts())
//     });
// }

  // recieving errors in the terminal, something may not be downloaded correctly. 