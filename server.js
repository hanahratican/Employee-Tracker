const express = require('express');

const mysql = require('mysql2');

const cTable = require('console.table');
const { default: inquirer } = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });


  const promptUser = () => {
    inquirer.prompt ([
        {
            type: list,
            name: choices,
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
  }