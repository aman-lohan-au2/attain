const {ServaAppDB} = require('../database/db')

async function add({loginId, name,password,type,isActive}){
    const db = await ServaAppDB();
    const student = db.collection("USER");
    try{
        const userData = await student.find({loginId}).toArray();
        console.log(userData)
        if(userData.length)
            return "Already a user exists with this email"
        await student.insertOne({name,password,type,isActive, loginId});
        const createdUser = await student.find({loginId}).toArray();
        const userId = createdUser[0]["_id"]
        return userId;
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

async function checkUser(loginId, password){
    const db = await ServaAppDB();
    const student = db.collection("USER");
    try{
        const result = await student.find({loginId,password}).toArray();
        if(result.length === 0) return null;
        const userId = result[0]["_id"]
        return userId;
    }
    catch(err){
        console.log(err)
        throw new Error('Something is broken!!')
    }
}


module.exports={add, checkUser}