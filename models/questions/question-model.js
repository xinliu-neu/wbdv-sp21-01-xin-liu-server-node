const mongoose = require("mongoose")
const questionsSchema = require("./question-schema")
const questionsModel = mongoose.model(
    'QuestionsModel',
    questionsSchema
)
module.exports = questionsModel