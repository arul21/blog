const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({ 
    name: String,
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
    deleteAt: { type: Date, default: null},    
}, { timestamps:true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category