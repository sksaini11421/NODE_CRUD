const db =require('../db');

const employeeADDResult = {
    employeeResult: employeeResult
}

function employeeResult(Name,EmpCode,salary){
    return new Promise((resolve, reject)=>{
        queryString= `INSERT INTO employee(Name,EmpCode,salary) values(?,?,?)`;
        db.query(queryString,[Name,EmpCode,salary],(error,result, fields)=>{

            if(error) {
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports = employeeADDResult;

