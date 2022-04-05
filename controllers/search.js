module.exports = {
    async search(req,res){
        const cars = await req.storage.getAll()
        console.log(cars);
        function getSearchResult(name = '',min = '',max = ''){
            name = req.query.search
            min = req.query.from
            max = req.query.to

            if(name !== ''){

            }

        }
        res.render('index', {title: 'Home Page' , cars})
    }
}