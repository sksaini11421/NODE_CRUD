const db = require('../db');

exports.updateEmployee = async (EmpID,Name) =>{
    return new Promise((resolve, reject) =>{
        queryString = `UPDATE employee set Name=? where EmpID=?`;
        db.query(queryString, [Name,EmpID], (error,result, fields) =>{
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}