module.exports = {
    async deleteListing(req,res){
        let id = req.params.id
        await req.storage.deleteCar(id)
        res.redirect('/')
    }
}