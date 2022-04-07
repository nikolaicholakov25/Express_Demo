module.exports = {
    async details(req,res){
        let id = req.params.id
        let car = await req.storage.getById(id)
        console.log(car);
        res.render('details', {
            title: car.name,
            car
        })
    }
}