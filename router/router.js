const express = require('express')
const route= express.Router();
const getEmployee = require('../controller/getEmployee_controller')
const employeeADDResult = require('../controller/postEmployee_controller');
const updateEmp = require('../controller/updateEmployee_controller');
const deleteEmployee = require('../controller/deleteEmployee_controller');
route.get('/employee',getEmployee.employeeResult);
route.post('/post',employeeADDResult.employeeResult)
route.patch('/up',updateEmp.upEmp)
route.delete('/del',deleteEmployee.delEmp)


module.exports = route;