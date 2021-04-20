// const questionService = require("../services/questions/questions-service")
//
// module.exports = (app) => {
//
//   const findAllQuestions = (req, res) => {
//     // const questions = questionService.findAllQuestions();
//     // res.send(questions)
//     questionService.findAllQuestions()
//       .then((questions) => {
//         res.send(questions)
//       })
//   }
//
//   const findQuestionsForQuiz = (req, res) => {
//     const quizId = req.params.qzid;
//     // const questions = questionService.findQuestionsForQuiz(quizId);
//     // res.send(questions);
//     questionService.findQuestionsForQuiz(quizId)
//     .then((questions) => {
//       res.send(questions)
//     })
//
//
//     questionService.findQuestionsForQuiz(quizId)
//       .then((questions) => {
//         res.send(questions)
//       })
//
//   }
//
//   const findQuestionById = (req, res) => {
//     const quid = req.params['questionId']
//     const question = questionService.findQuestionById(quid);
//     res.send(question);
//   }
//
//   app.get("/api/questions", findAllQuestions);
//   app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
//   app.get("/api/quizzes/:quizId/:questionId", findQuestionById);
// }
//


const questionsService = require('../services/questions/questions-service')
module.exports = function(app) {
  app.get('/api/quizzes/:qid/questions', (req, res) =>
      questionsService.findQuestionsForQuiz(req.params['qid'])
      .then(questions => res.json(questions)))

  app.get('/api/questions', (req, res) =>
      questionsService.findAllQuestions()
      .then(allQuestions => res.json(allQuestions)))
  app.get('/api/questions/:qid', (req, res) =>
      questionsService.findQuestionById(req.params['qid'])
      .then(question => res.json(question)))
}

