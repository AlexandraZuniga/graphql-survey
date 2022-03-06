const mongoose = require('mongoose');

const MCQuestionSchema= mongoose.Schema({
    title:{
        type: String,

    },
    options:{
        type: [String]
    },
    answer:{
        type: String
    }
});

const MCQuestion = mongoose.model('mcquestion', MCQuestionSchema);
module.exports = MCQuestion;