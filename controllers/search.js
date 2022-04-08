
module.exports = {
    async search(req,res){
        let search = req.query
        const data = await req.storage.getAll(search)

        res.locals = {
            title: 'Home Page' ,
            cars: data,
            search: req.query
        }
        res.render('index')
    }
}