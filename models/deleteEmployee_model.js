const db = require('../db');

exports.deleteEmployee = async (EmpID) =>{
    return new Promise((resolve, reject) =>{
        queryString = `delete from employee where( EmpID = ?)`;
        db.query(queryString, [EmpID], (error,result, fields) =>{
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}