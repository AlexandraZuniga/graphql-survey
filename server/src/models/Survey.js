const mongoose = require('mongoose');
// const MCQuestion = require('./MCQuestion');
// const TFQuestion = require('./TFQuestion');

const SurveySchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String
    },
    // startDate:{
    //     type: Date
    // },
    // endDate:{
    //     type: Date
    // },
    mcquestions:{
        type: [{}]
    },
    tfquestions:{
        type: [{}]
    }
});

const Survey = mongoose.model('survey', SurveySchema);
module.exports = Survey;