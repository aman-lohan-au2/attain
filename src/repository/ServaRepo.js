const {ServaAppDB} = require('../database/db')


async function add({ name,data,isActive,userCountThreshold,serveyCreatedByUserId}){
    const db = await ServaAppDB();
    const student = db.collection("SERVEY");
    try{
        const userData = await student.find({loginId}).toArray();
        console.log(userData)
        if(userData.length)
            return "Already a user exists with this email"
        await student.insertOne({name,password,type,isActive, loginId});
        return "Created Successfully"
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

module.exports={add}