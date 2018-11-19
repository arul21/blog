const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const Category =require('./category')

const articleSchema = new Schema ({
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    deleteAt: { type: Date, default: null},    
}, { timestamps:true });

// articleSchema.pre('save', function(next) {
//     let user = User.updateOne(
//         {$push: {articles: this._id}}
//     )
    // let category = Category.updateOne(
    //     {_id: this.category}, 
    //     {$push: {articles: this._id}
    // })

    // Promise.all([user, category])
    // .then(response => {
    //     next()
    // })
    // .catch(err => console.log(err))
// })

// articleSchema.pre('remove', function(next) {
//     let user = User.updateOne(
//         {$pull: {articles: this._id}}
//     )
//     let category = Category.updateOne(
//         {_id: this.category}, 
//         {$pull: {articles: this._id}}
//     )

//     Promise.all([user, category])
//     .then(response => {
//         next()
//     })
//     .catch(err => console.log(err))
// })


const Article = mongoose.model('Article', articleSchema)
module.exports = Article
