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
        await fs.writeFile('./services/data.json' , JSON.stringify(data , null , 2))
    }
    catch (err){
        console.error('Database write error!')
        console.error(err)
        process.exit(1)
    }
}

async function getAll(){
    const data = await read()
    return data
    // return Object
    // .entries(data)
    // .map(([id,v]) => Object.assign( {} , { id } , v))
}

async function addCar(data){
    const id = nextId()

    const car = {
        _id: id,
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price
    }

    let allData = await read()
    allData[id] = car
    await write(allData)
}

async function getById(id){
    let car = await read()
    // console.log(car[id]);
    return car[id]
}

async function deleteCar(id){
    let data = await getAll()
    delete data[id]

    await write(data)
}

module.exports = () => (req,res,next) => {
    req.storage = {
        getAll,
        addCar,
        getById,
        read,
        deleteCar
    }
    next()
}