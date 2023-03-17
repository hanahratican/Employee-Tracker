const connection = require("./connection");

// class DB {
//   // Keeping a reference to the connection on the class in case we need it later
//   constructor(connection) {
//     this.connection = connection;
//   }
// //   Find all departments
//   findAllDepartments() {
//     return this.connection.promise().query(
//       "SELECT department.id, department.name FROM department;"
//     );
//   }
//   // Find all employees in a given department, join with roles to display role titles
//   findAllEmployeesByDepartment(departmentId) {
//     return this.connection.promise().query(
//       "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
//       departmentId
//     );
//   }
// }

// module.exports = new DB(connection);