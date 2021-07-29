const UserService = require('../service/service')

async function add(req,res){
    const {name,password,type,isActive, loginId} = req.body;
    const result = await UserService.add({name,password,type,isActive, loginId});
    res.send({msg:result})
}


async function checkUser(req,res){
    const {loginId,password} = req.body;
    const result = await UserService.checkUser(loginId,password);
    res.send({msg:result})
}

module.exports = {add, checkUser}