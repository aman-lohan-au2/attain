const studentRepo = require('../repository/repo')

async function add(arr){
    const result = await studentRepo.add(arr);
    return result;
}


async function checkUser(loginId, password){
    const result = await studentRepo.checkUser(loginId, password);
    return result;
}
module.exports ={add, checkUser}