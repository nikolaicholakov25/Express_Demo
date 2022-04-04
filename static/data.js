const fs = require('fs')

// const data = fs.readFile('./products.json', 'utf8')


function nextId(){
   let id = []

   for(let i =0;i<4;i++){
       let num = Math.floor(Math.random() * 9)
       id.unshift(num)
   }

   return id.join('')
}

function getData(){
    const data = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    return data
    
}

function getDataById(id){
    const data = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    return data[id]
    
}

function updateData(data){
    let data = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    const _id = nextId()

    data[_id] = data
    data[_id]._id = _id

    fs.writeFileSync('./products.json' , JSON.stringify(data , null , 2))
}

function updateDataWithId(data){
    let data = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    let id = data._id
    data[id] = data

    console.log(data);

    fs.writeFileSync('./products.json' , JSON.stringify(data , null , 2))
}
module.exports = {
    getData,
    updateData,
    getDataById,
    updateDataWithId
}
