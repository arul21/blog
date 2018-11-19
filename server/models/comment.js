const mongoose = require('mongoose')
const Article = require('./article')
const Schema = mongoose.Schema

const commentSchema = new Schema({ 
    comment: String,
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    deleteAt: { type: Date, default: null},    
}, { timestamps:true })

commentSchema.pre('save', function(next) {
    Article.updateOne(
        {_id: this.article}, 
        {$push: {comments: this._id}
    })
    .then( response => {
        next()
    })
    .catch( err => console.log(err))
})

// commentSchema.pre('remove', function(next) {
//     Article.updateOne(
//         {_id: this.article}, 
//         {$pull: {comments: this._id}
//     })
//     .then( response => {
//         next()
//     })
//     .catch( err => console.log(err))
// })

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment