module.exports = {
    async home(req,res){
        const cars = await req.storage.getAll()
        res.render('index', {title: 'Home Page' , cars})
    }
}