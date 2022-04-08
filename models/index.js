const connectionString = 'mongodb://localhost:27017/Carbicle'
const mongoose = require('mongoose');
const car = require('./car');

async function init(){
    try{
        await mongoose.connect(connectionString , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(err){
        console.log('Database Error');
        process.exit(1)
    }

    console.log('Database connected');
}

module.exports = init