module.exports = {
    async editGet(req,res){
        const car = await req.storage.getById(req.params.id)

        res.locals = {
            title: 'Edit Page' ,
            car
        }
        res.render('edit')
    },
    async editPost(req,res){
        let name = req.body.name
        let description = req.body.description
        let imageUrl = req.body.imageUrl
        let price = req.body.price
        
        let newCar = {
            name,
            description,
            imageUrl,
            price
        }
        
        console.log(newCar);
        await req.storage.updateCar(req.params.id , newCar)

        let cars = await req.storage.getAll()



        res.locals = {
            title: 'Home Page' ,
            cars
        }
        res.render('index')
    }
}