import questions from './questions.json' assert { type: "json" };

const getRandomQuestion = (topic) => {
    let questionTopic = topic.toLowerCase()
    
    if (questionTopic === 'случайный вопрос') {
        questionTopic = Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]
    }
    
    const radmonQuestionIdx = Math.floor(Math.random() * questions[questionTopic].length)

    return {
        question: questions[questionTopic][radmonQuestionIdx],
        questionTopic
    }
}


getRandomQuestion('Случайный вопрос')

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find(q => q.id === id)

    if (!question.hasOptions) {
        return question.answer
    }

    return question.options.find(option => option.isCorrect).text
}

export { getRandomQuestion, getCorrectAnswer }