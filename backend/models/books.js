import mongoose from 'mongoose'

const booksData = mongoose.Schema({
    name: { type: String},
    path: { type: String},
    
    Books: [{
        img: String,
        link: String
    }]
})

export default mongoose.model("book", booksData)