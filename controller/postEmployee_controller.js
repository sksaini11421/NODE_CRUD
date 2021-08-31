const employeeADDResult = require('../models/postEmployee_model');

exports.employeeResult = async (req,res, next) =>{
    try{
       // const data = req.body;
        const allUser = req.body;
        // const EmpID = allUser.EmpID;
        const Name = allUser.Name;
        const EmpCode = allUser.EmpCode;
        const salary = allUser.salary;
        await employeeADDResult.employeeResult(Name,EmpCode,salary);
        res.status(200).json({message:'employee Added'});
    }catch (err){
        if(err){
            return res.status(400).send({'message':err.message});
        }else {
            res.status.send('data inserted successfully!!')
        }
    }
}