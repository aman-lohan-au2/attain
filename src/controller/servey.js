const serveyService = require('../service/servey')

async function get(req,res){
    const result = await serveyService.get();
    res.send({msg:result})
}

async function getServeyByAdmin(req,res){
    console.log(req.params)
    const result = await serveyService.getServeyByAdmin(req.params.serveyerUserId);
    res.send({msg:result})
}

async function add(req,res){
    const {name,data,isActive,userCountThreshold,serveyCreatedByUserId} = req.body;
    const result = await serveyService.add({name,data,isActive,userCountThreshold,serveyCreatedByUserId});
    res.send({msg:result})
}

// SERVEY_RESULT

async function getServeyResult(req,res){
    const result = await serveyService.getServeyResult(req.params.serveyId);
    res.send({msg:result})
}

async function addServeyResult(req,res){
    const {response,isActive,attendantId,serveyId} = req.body;
    const result = await serveyService.addServeyResult({response,isActive,attendantId,serveyId});
    res.send({msg:result})
}

module.exports = {get, add, getServeyByAdmin, getServeyResult, addServeyResult}