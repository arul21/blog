const Article = require('../models/article')

module.exports = {
    addArticle: (req, res) =>{
        console.log(`addd`, req.body);
        let newArticle = {
            title: req.body.title,
            description: req.body.description,
            owner: req.decoded._id,
            category: req.body.category
        }
        let article = new Article(newArticle)
        article.save()
        .then( response => {
            res.status(201).json(response)
            console.log(`arrr`, response);
            
        })
        .catch( err => {
            res.status(500).json(err)
            console.log(`errr`, err);
            
        })
    },

    getAll: (req, res) => {
        Article.find({})
        .sort([['updatedAt', 'descending']])
        .populate('owner')
        .populate('category')
        .then( response => res.status(200).json(response))
        .catch( err => res.status(500).json(err))
    },

    putById: (req, res) => {
        Article.findById({_id:req.params.id, owner: req.decoded._id})
        .populate('owner')
        .populate('category')
        .populate({ 
            path: 'comments',
            populate: {path: 'owner'} 
         })
        .then( oldArticle => {
            let dataArticle = {
                title: req.body.title || oldArticle.title,
                description: req.body.description || oldArticle.description,
            }
            Article.updateOne({_id: req.params.id}, dataArticle)
            .then( response => res.status(200).json(response))
            .catch( err => res.status(500).json(err))
        })
        .catch( err => res.status(500).json(err))
    },

    deleteById: (req, res) => {
        console.log(`del`);
        
        Article.findById({_id:req.params.id, owner: req.decoded._id})
        .then(result => {
            let article = new Article({_id: result._id})
            article.remove()
            .then( response => {
                res.status(200).json(response)
                console.log(`masukkk delete`);
                
            })
            .catch( err => {
                res.status(500).json(err)
            })
        })
        .catch( err => res.status(500).json(err))
    }


}