module.exports = {
    async details(req,res){
        let id = req.params.id
        let car = await req.storage.getById(id)
        res.render('details', {
            title: car.name,
            car
        })
    }
}