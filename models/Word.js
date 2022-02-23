const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    answer: {
        type: String
    }
    },{
        
        timestamps: true
    })

    module.exports = Word = mongoose.model('Word', WordSchema)