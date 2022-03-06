const mongoose = require('mongoose');

const TFQuestionSchema = mongoose.Schema({
    title: {
        type: String
    },
    option1: {
        type: Boolean
    },
    option2: {
        type: Boolean
    },
    answer: {
        type: Boolean
    }
});

const TFQuestion = mongoose.model('tfquestion', TFQuestionSchema);
module.exports = TFQuestion;