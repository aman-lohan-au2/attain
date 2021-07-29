const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://aman2:1FHkODb42gw0czhY@cluster0.tfrr4.mongodb.net/ServaApp?retryWrites=true&w=majority";

async function connectMongo(){
    let client = new MongoClient(uri);
    await client.connect();
    return client;
}

async function getDB(){
    const client = await connectMongo();
    return client.db('ServaApp')
}

module.exports = {ServaAppDB: getDB,connectMongo};
