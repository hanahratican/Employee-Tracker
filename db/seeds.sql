INSERT INTO department (department_id, first_name, last_name, department_name)
VALUES (2, "Michael", "Scott", "Manager"),
       (3, "Jim", "Halpert", "Sales"),
       (4, "Pam", "Beesly", "Reception"),
       (1, "David", "Wallace", "Corporate"),
       (3, "Dwight", "Schrute", "Sales");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (201, "Regional Manager", 75000, 2),
       (302, "Sales Associate", 55000, 3),
       (401, "Receptionist", 45000, 4),
       (101, "Cheif Financial Officer", 250000, 1),
       (301, "Lead Sales Associate", 60000, 3);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2001, "Michael", "Scott", 201, 02),
       (3002, "Jim", "Halpert", 302, null),
       (4001, "Pam", "Beesly", 401, null),
       (1001, "David", "Wallace", 101, 01),
       (3001, "Dwight", "Schrute", 301, null);
