const questionService = require("../services/questions/questions-service")

module.exports = (app) => {

  const findAllQuestions = (req, res) => {
    questionService.findAllQuestions()
      .then((questions) => {
        res.send(questions)
      })
  }

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params.qzid;
    questionService.findQuestionsForQuiz(quizId)
    .then((questions) => {
      res.send(questions)
    })
  }

  const findQuestionById = (req, res) => {
    questionService.findQuestionById(req.params.qid)
    .then(question => res.json(question))
  }

  app.get("/api/questions", findAllQuestions);
  app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
  app.get("/api/quizzes/:qid", findQuestionById);
}
