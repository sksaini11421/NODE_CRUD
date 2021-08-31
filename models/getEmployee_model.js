const db= require('../db');

const employeeResult = {
    empResult: empResult
}
function empResult(){
    return new Promise((resolve, reject)=>{
        queryString = `SELECT * From employee`
        db.query(queryString,(error, result, fields)=>{
            if(error) {
                reject(error);
            }
            else{
                resolve(result)
            }
        });
    })

}
module.exports = employeeResult;