const { gql } = require('apollo-server-express');
const typeDefs = gql`
type MCQuestion{
    id:ID,
    title: String,
    options: [String],
    answer: String
}
type TFQuestion{
    id:ID, 
    title: String,
    option1: Boolean,
    option2: Boolean,
    answer: Boolean
}
type Survey{
    id: ID,
    title: String,
    author: String,
    # startDate: Date,
    # endDate: Date,
    mcquestions: [MCQuestion],
    tfquestions: [TFQuestion]
}
type Query{
    getAllSurveys: [Survey]
    getSurveyAnswers(id:ID) : Survey
    getAllMCQuestions: [MCQuestion]
    getAllTFQuestions: [TFQuestion]
}
input SurveyInput{
    title: String, 
    author: String, 
    # startDate: Date,
    # endDate: Date,
    mcquestions: [MCQuestionInput],
    tfquestion: [TFQuestionInput]
}
input MCQuestionInput{
    title: String,
    options: [String],
    answer: String
}
input TFQuestionInput{
    title:String,
    option1: Boolean,
    option2: Boolean,
    answer: Boolean
}
type Mutation{
    createSurvey(survey: SurveyInput) : Survey
    deleteSurvey(id: ID): String
    updateSurvey(id: ID, survey: SurveyInput) : Survey
    createMCQuestion(mcquestion: MCQuestionInput) : MCQuestion
    deleteMCQuestion(id: ID) : String
    updateMCQuestion(id: ID, mcquestion: MCQuestionInput) : MCQuestion
    createTFQuestion(tfquestion: TFQuestionInput) : TFQuestion
    deleteTFQuestion(id: ID): String
    updateTFQuestion(id: ID, tfquestion: TFQuestionInput): TFQuestion
}
`
module.exports = typeDefs;