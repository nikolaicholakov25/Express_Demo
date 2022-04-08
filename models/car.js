const {Schema , model} = require('mongoose')

const carSchema = new Schema({
    name: {
        type: String,
        required: true
    } ,
    description: {
        type: String,
        required: true
    } , 
    imageUrl: String,
    price: Number

})

const car = model('car' , carSchema)

module.exports = car