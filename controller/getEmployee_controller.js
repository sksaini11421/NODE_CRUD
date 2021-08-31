const employeeResult = require('../models/getEmployee_model');

exports.employeeResult = async (req,res, next)=>{
    try{
        const data = req.body;
        
        const result = await employeeResult.empResult();
        res.status(200).json(result);
    } catch (err) {
        if(err){
            return res.status(400).send({'message': err.message});
        } else {
            res.status(500).send(err);
        }
    }
}