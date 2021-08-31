const deleted = require('../models/deleteEmployee_model');

exports.delEmp = async (req,res,next) =>{
    try{
        const empData = req.body;
        const EmpID = empData.EmpID
        // const Name = empData.Name;
        // const EmpCode = empData.EmpCode;
        // const salary = empData.salary;
        await deleted.deleteEmployee(EmpID);
        res.status(200).json({message: 'deleted Employee details!'})
    }
    catch (err) {
        if(err){
            return res.status(400).send({'message': err.message})
        } else {
             res.status(500).send(err)
        }
    }
}