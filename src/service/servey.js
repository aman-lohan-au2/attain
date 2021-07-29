const serveyRepo = require('../repository/servey')

async function get(){
    const result = await serveyRepo.get();
    return result;
}

async function getServeyByAdmin(serveyerUserId){
    const result = await serveyRepo.getServeyByAdmin(serveyerUserId);
    return result;
}

async function add({name,data,isActive,userCountThreshold,serveyCreatedByUserId}){
    const result = await serveyRepo.add({name,data,isActive,userCountThreshold,serveyCreatedByUserId});
    return result;
}

//SERVEY_RESULT
async function getServeyResult(serveyId){
    const result = await serveyRepo.getServeyResult(serveyId);
    return result;
}

async function addServeyResult({response,isActive,attendantId,serveyId}){
    const result = await serveyRepo.addServeyResult({response,isActive,attendantId,serveyId});
    return result;
}


module.exports ={get, add, getServeyByAdmin, getServeyResult,addServeyResult}