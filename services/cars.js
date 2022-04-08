const { options } = require('nodemon/lib/config')
const Car = require('../models/car')

const fs = require('fs').promises

function nextId(){
    let id = []
 
    for(let i =0;i<4;i++){
        let num = Math.floor(Math.random() * 9)
        id.unshift(num)
    }
 
    return id.join('')
}
 

async function read(){
    try{
        const file = await fs.readFile('./services/data.json','utf8')
        return JSON.parse(file)
    }
    catch (err){
        console.error('Database read error!')
        console.error(err)
        process.exit(1)
    }
}

async function write(data){
    try{
        
    }
    catch (err){
        console.error('Database write error!')
        console.error(err)
        process.exit(1)
    }
}

async function getAll(query){
    let options = {}

    if(query.search){
        options.name = new RegExp(query.search , 'i')
    } 
    if(query.from){
        options.price = {
            $gte: Number(query.from)
        }
    }
    if(query.to){
        if(!options.price){
            options.price = {
                $lte: Number(query.to)
            }
        } else {
            options.price.$lte = Number(query.to)
        }

    }

    console.log(options);

    const cars = await Car.find(options)
    return cars.map(car => ({
        id: car._id,
        name: car.name,
        description: car.description,
        price: car.price,
        imageUrl: car.imageUrl
    }) )
}


async function addCar(data){

    const car =  new Car({
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price
    })

    await car.save()

}

async function getById(id){
    let car = await Car.findById(id)
    if(car){
        return {
            id: car._id,
            name: car.name,
            description: car.description,
            price: car.price,
            imageUrl: car.imageUrl 
        }
    } else {
        return undefined
    }
}

async function deleteCar(id){
    await Car.findByIdAndDelete(id)
}

async function updateCar(id , data){
    let result = await Car.findByIdAndUpdate(id ,data)
    return result
}


module.exports = () => (req,res,next) => {
    req.storage = {
        getAll,
        addCar,
        getById,
        read,
        deleteCar,
        updateCar
    }
    next()
}