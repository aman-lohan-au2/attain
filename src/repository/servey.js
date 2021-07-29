const mongo = require('mongodb')
const {ServaAppDB} = require('../database/db')


async function add({ name,data,isActive,userCountThreshold,serveyCreatedByUserId}){
    const db = await ServaAppDB();
    const student = db.collection("SERVEY");
    if(true === undefined) isActive = false;
    try{
        await student.insertOne({name,data,isActive,userCountThreshold,serveyCreatedByUserId, createdAt: new Date()});
        return "Created Successfully"
    }
    catch(err){
        console.log(err)
        return "Error"
    }
}

async function get(){
    const db = await ServaAppDB();
    const student = db.collection("SERVEY");
    try{
        const serveyData = await student.find({userCountThreshold: {$gt: 0}, isActive: true}).toArray();
        return serveyData;
    }
    catch(err){
        return "Error"
    }
}


async function getServeyByAdmin(serveyerUserId){
    console.log(serveyerUserId)
    const db = await ServaAppDB();
    const student = db.collection("SERVEY");
    try{
        const serveyData = await student.find({
            serveyCreatedByUserId : serveyerUserId
        }).toArray();
        return serveyData;
    }
    catch(err){
        return "Error"
    }
}


//SERVEY_RESULT
async function getServeyResult(serveyId){
    console.log(serveyerUserId)
    const db = await ServaAppDB();
    const serveyResult = db.collection("SERVEY_RESULT");
    try{
        const serveyData = await serveyResult.find({
            serveyId
        }).toArray();
        return serveyData;
    }
    catch(err){
        return "Error"
    }
}

//Add_Servey_Result
async function addServeyResult({ response,isActive,attendantId,serveyId}){
    const db = await ServaAppDB();
    const coll = db.collection("SERVEY_RESULT");
    if(true === undefined) isActive = false;
    try{
        const serveyResponseData = await coll.find({
            serveyId,
            attendantId
        }).toArray();
        if(serveyResponseData.length) throw new Error("K kr k manega, already servey attemped")
        await coll.insertOne({response,isActive,attendantId,serveyId, createdAt: new Date()});
        const servey = await db.collection("SERVEY").find({_id: new mongo.ObjectId(serveyId)}).toArray();
        console.log(servey)
        await db.collection("SERVEY").updateOne({_id: new mongo.ObjectId(serveyId)}, {$set: {userCountThreshold: servey[0]["userCountThreshold"] - 1}}, )
        return "Created Successfully"
    }
    catch(err){
        return err.message;
    }
}


module.exports={get, add, getServeyByAdmin, addServeyResult, getServeyResult}