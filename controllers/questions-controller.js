const questionService = require("../services/questions/questions-service")

module.exports = (app) => {

  const findAllQuestions = (req, res) => {
    const questions = questionService.findAllQuestions();
    res.send(questions)
  }

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params.qzid;
    const questions = questionService.findQuestionsForQuiz(quizId);
    res.send(questions);
  }

  const findQuestionById = (req, res) => {
    const quid = req.params['questionId']
    const question = questionService.findQuestionById(quid);
    res.send(question);
  }

  app.get("/api/questions", findAllQuestions);
  app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
  app.get("/api/quizzes/:quizId/:questionId", findQuestionById);
}

