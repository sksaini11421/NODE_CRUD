const updated = require('../models/updateEmployee_model');

exports.upEmp = async (req,res,next) =>{
    try{
        const empData = req.body;
        const EmpID = empData.EmpID
        const Name = empData.Name;
        // const EmpCode = empData.EmpCode;
        // const salary = empData.salary;
        await updated.updateEmployee(EmpID,Name);
        res.status(200).json({message: 'updates Emplyees details!'})
    }
    catch (err) {
        if(err){
            return res.status(400).send({'message': err.message})
        } else {
             res.status(500).send(err)
        }
    }
}