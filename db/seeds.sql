USE employeetracker_db;

INSERT INTO department (department_name)
VALUES ("Corporate"),
       ("Manager"),
       ("Sales"),
       ("Reception");
       

INSERT INTO role (title, salary, department_id)
VALUES ("Cheif Financial Officer", 250000.00 , 1),
       ("Regional Manager", 75000.00 , 2),
       ("Sales Associate", 55000.00, 3),
       ("Receptionist", 45000.00, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Wallace", 1, NULL),
       ("Michael", "Scott", 2, 1),
       ("Jim", "Halpert", 3, 2),
       ("Pam", "Beesly", 4, 2);
       
