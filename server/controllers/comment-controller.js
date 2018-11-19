const Comment = require('../models/comment')
const Article = require('../models/article')


module.exports = {
    addComment: (req, res) => {
        console.log(`masuk`);
        let newComment = {
            comment: req.body.comment,
            article: req.params.article,
            owner: req.decoded._id,
        }
        let comment = new Comment(newComment)
        comment.save()
        .then( response => {
            res.status(201).json(response)

        })
        .catch( err => {
            res.status(500).json(err)
            console.log(`.........>>>..`);
            
        })
    },

    deleteById: (req, res) => {
        Comment.findById({_id: req.params.id, owner: req.decoded._id})
        .then(result => {
            let comment = new Comment({_id: result._id})
            comment.remove()
            .then( response => res.status(200).json(response))
            .catch( err => res.status(500).json(err))
        })
        .catch( err => res.status(500).json(err))
    },

    getComment: (req, res) =>{
        console.log(`ada`);
        Comment.find()
        .populate('owner')
        .populate('article')
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
            console.log(`add`);
            
        })
    },

    getAll: (req, res) =>{
        Article.find({})
        .populate('comments')
        then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}

