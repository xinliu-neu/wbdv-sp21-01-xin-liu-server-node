const questionsModel = require('../models/questions/question-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
.populate('questions').exec().then(quiz => quiz.questions)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

