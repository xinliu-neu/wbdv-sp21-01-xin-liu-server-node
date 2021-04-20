// const questions = require('./questions.json')
// const questionsModel = require("../../models/questions/question-model")
// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}
//
// const findAllQuestions = () => {
//   return questionsModel.find()
//   // return questions;
// }
//
// const findQuestionsForQuiz = (qzid) => {
//   // return questions.filter(question => question.quizId === qzid);
//   return questionsModel.find({quizId: "345"})
// }
//
//
// const findQuestionById = (quid) => {
//   // return questions.find(question => question._id === quid);
//   return questionsModel.findById(quid)
// }
// const updateQuestion = () => {}
// const deleteQuestion = () => {}
//
//
//
// module.exports = {
//   createQuestion,
//   createQuestionForQuiz,
//   findQuestionsForQuiz,
//   findAllQuestions,
//   findQuestionById,
//   updateQuestion,
//   deleteQuestion,
// }


const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

