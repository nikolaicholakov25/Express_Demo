module.exports = {
    async editGet(req,res){
        const car = await req.storage.getById(req.params.id)
        console.log(car);

        res.locals = {
            title: 'Edit Page' ,
            car
        }
        res.render('edit')
    },
    async editPost(req,res){
        const cars = await req.storage.getAll()


        res.locals = {
            title: 'Home Page' ,
            cars
        }
        res.render('index')
    }
}