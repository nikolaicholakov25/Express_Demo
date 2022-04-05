module.exports = {
    create(req,res){
        res.render('create' , {title: 'Create Listing'})
    },
    async createPost(req,res){
        // await req.storage.addCar(req.body)
        await req.storage.addCar(req.body)
        res.redirect('/')
    }
}