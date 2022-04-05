module.exports = {
    async search(req,res){
        const cars = await req.storage.getAll()
        let data = Object.values(cars)
       
        if(req.query.search){
            data = data.filter(c => c.name.toLowerCase().includes(req.query.search.toLowerCase()))
        }
        if(req.query.from){
            data = data.filter(c => Number(c.price) >= Number(req.query.from))
        }
        if(req.query.to){
            data = data.filter(c => Number(c.price) <= Number(req.query.to))
        }

        res.locals = {
            title: 'Home Page' ,
            cars: data,
            search: req.query
        }
        res.render('index')
    }
}