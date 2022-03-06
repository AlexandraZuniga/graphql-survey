const Survey = require('../models/Survey');
const TFQuestion = require('../models/TFQuestion');
const MCQuestion = require('../models/MCQuestion');

const resolvers = {
    Query: {
        getAllSurveys: async () =>{
            return await Survey.find()
        },
        getSurveyAnswers: async (_parent,{ id }, _context, _info) =>{
            return await Survey.findById(id)
        },
        getAllMCQuestions: async () =>{
            return await MCQuestion.find()
        },
        getAllTFQuestions: async ()=>{
            return await TFQuestion.find()
        }
    },
    Mutation: {
        createSurvey: async (parent, args, context, info) =>{
            const { title, author, /* startDate, endDate,*/ mcquestions, tfquestions } = args.survey
            const survey = new Survey({ title, author, /* startDate, endDate, */ mcquestions, tfquestions });
            await survey.save()
            return survey
        },
        deleteSurvey: async (parent, args, context, info) => {
            const { id } = args;
            await Survey.findByIdAndDelete(id);
            return "Survey Deleted"
        },
        updateSurvey: async (parent, args, context, info) =>{
            const { id } = args
            const { title, author, /* startDate, endDate, */ mcquestions, tfquestions} = args.survey
            const update = {}
            if (title != undefined ){
                update.title = title
            }
            if (author !== undefined){
                update.author = author
            }
            // if(startDate !== undefined){
            //     update.startDate = startDate
            // }
            // if(endDate !== undefined){
            //     update.endDate = endDate
            // }
            if(mcquestions !== undefined){
                update.mcquestions = mcquestions
            }
            if(tfquestions !== undefined){
                update.tfquestions = tfquestions
            }
            const survey = await Survey.findByIdAndUpdate(id, update, {new: true});
            return survey
        },
        createMCQuestion: async (parent, args, context, info) =>{
            const { title, options, answer} = args.mcquestion
            const mcquestion = new MCQuestion({ title, options, answer});
            await mcquestion.save()
            return mcquestion
        },
        deleteMCQuestion: async (parent, args, context, info) => {
            const { id } = args;
            await MCQuestion.findByIdAndDelete(id);
            return " Question Deleted"
        },
        updateMCQuestion: async (parent, args, context, info) =>{
            const { id } = args
            const { title, options, answer} = args.mcquestion
            const update = {}
            if (title != undefined ){
                update.title = title
            }
            if(options !== undefined){
                update.options = options
            }
            const mcquestion = await MCQuestion.findByIdAndUpdate(id, update, {new: true});
            return mcquestion
        },
        createTFQuestion: async (parent, args, context, info) =>{
            const { title, option1, option2, answer} = args.tfquestion
            const tfquestion = new TFQuestion({ title, option1, option2, answer});
            await tfquestion.save()
            return tfquestion
        },
        deleteTFQuestion: async (parent, args, context, info) => {
            const { id } = args;
            await TFQuestion.findByIdAndDelete(id);
            return "Question Deleted"
        },
        updateTFQuestion: async (parent, args, context, info) =>{
            const { id } = args
            const { title, option1, option2, answer} = args.tfquestion
            const update = {}
            if (title != undefined ){
                update.title = title
            }
            const tfquestion = await TFQuestion.findByIdAndUpdate(id, update, {new: true});
            return tfquestion
        }
    }
};

module.exports = resolvers;