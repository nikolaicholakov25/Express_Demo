module.exports = {
    async createPost(req,res){
        // await req.storage.addCar(req.body)
        await req.storage.addCar(req.body)
        res.redirect('/')
    }
}