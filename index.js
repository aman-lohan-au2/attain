const express = require('express')
const { connectMongo } = require('./src/database/db')
const app = express()
const router = require('./src/router/router')
const bodyParser = require('body-parser')


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

async function main(){
    await connectMongo();

    app.use('/api',router);
    app.get('*',(req,res)=>{
        res.send('Error 404')
    });

    app.listen(8000, err => {
        console.log("started at 8000")
    })

}

main()