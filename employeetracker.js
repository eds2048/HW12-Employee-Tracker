var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Y3sQ#l87",
    database: "employee_DB"
});


// start inquirer questions
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees by Department":
                    viewEmployeesByDept();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;
            }





        });
}

// Define all Functions
    function viewEmployees(){
    console.log("Viewing employees \n");
    connection.query("SELECT * FROM employee_DB", function(err,res){
        if(err) throw err;
        console.log(res);
        connection.end();
    });
    }


function viewEmployeesByDept() {
    connection.query("SELECT * FROM employee_DB where ", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}


function addEmployee() {
    // what is employee first name
    // what is employee  name name
    // what is employee's role
    // who is employee's manager
    inquirer
        .prompt([{
            name: "firstname",
            type:"input",
            message:"What is employee's first name?"
        },
        {
            name: "lastname",
            type: "input",
            message: "What is employee's last name?"
        },
            name: "role",
            type: "list",
            message: "What is employee's role?",
            choices:['Sales Lead','Sales Person','Software Engineer','Account Manager','Accountant']
        ])
        .then(function(answer)
            connection.query(
                "INSERT INTO employee_db SET?",
                {
                first_name: answer.firstname,
                last_name: answer.lastname,
                title: answer.role
                },
            function(err{
                if(err) throw err;
                start();
            });
            
            );

        });


    connection.query("INSERT INTO employee_DB", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}






















