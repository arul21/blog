const Category = require('../models/category')

module.exports = {
    addCategory: (req, res) =>{
        console.log(`.....ada`);
        
        Category.create({
            name: req.body.name
        })
        .then(response =>{
            res.status(201).json(response)
            console.log(`.....ada response`)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getAll: (req, res) =>{
        Category.find({})
        
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}