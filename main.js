const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const compteur = document.getElementById('compteur')
const note = document.getElementById('note')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-buttons')
var compt


let randomQuestions, currentQuestionsIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
  })

function startGame() {
    startBtn.classList.add('hide')
    compteur.classList.remove('hide')
    note.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random - 1)
    currentQuestionsIndex = 0
    compt = 0
    compteur.innerText = compt


    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnElement.appendChild(button)
    
 })
}

function resetState(){
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    point(correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        })
        if (randomQuestions.length > currentQuestionsIndex + 1) {

        nextBtn.classList.remove('hide')
    }else{
        startBtn.innerText = 'Recommencer'
        startBtn.classList.remove('hide')
    }
}
function point(correct) {
    if (correct){
        compt= compteur.innerText = compt + 1
      }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions =  [
    {
        question: 'Est-ce que Chris a p??t?? en vocal ?',
        answers: [
            {text: 'Oui', correct: true},
            {text: 'Non', correct: false},
            {text: 'Peut-??tre', correct: false},
            {text: 'Il a m??me p??t?? sur ma daronne', correct: false}
        ]
    },
    {
        question: 'William, raciste ou juste blagueur?',
        answers: [
            {text: 'Entre les deux', correct: false},
            {text: 'Tr??s raciste comme le Z', correct: true},
            {text: 'Non', correct: false},
            {text: 'Blagueur de fou', correct: false}
        ]
    },
    {
        question: 'Quels ??tudes Thomas Bauhmann est-il entrain de pratiquer ?',
        answers: [
            {text: 'Des ??tudes de d??velopeur', correct: false},
            {text: 'Des ??tudes de musiques', correct: false},
            {text: 'DJ', correct: true},
            {text: 'Des ??tudes de langues', correct: false}
        ]
    },
    {
        question: 'Jiyan est-il vraiment homophobe ',
        answers: [
            {text: 'Que sur twitter', correct: false},
            {text: 'Il a d??j?? sucer un boug donc non', correct: false},
            {text: 'Oui', correct: true},
            {text: 'Ui mais sans le "O"', correct: false}
        ]
    },
    {
        question: 'Combien d\'ulti Malphite William a-t-il loup?? ?',
        answers: [
            {text: 'Dieu m??me a arr??t?? de compter', correct: true},
            {text: '42', correct: false},
            {text: '12', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        question: 'Amaury est-il Platine sur le c??l??bre jeu League of Legends ?',
        answers: [
            {text: 'Non', correct: true},
            {text: 'Nein', correct: true},
            {text: 'No', correct: true},
            {text: '????', correct: true}
        ]
    },
    {
        question: 'Que faisait le daron de Pierre a la naissance de son fils ?',
        answers: [
            {text: 'Il ??tait heureux et accompagnait sa femme', correct: false},
            {text: 'Il draguait l\'infirmi??re', correct: false},
            {text: 'Il lan??ait des cailloux', correct: true},
            {text: 'Il est parti chercher du lait', correct: false}
        ]
    },
    {
        question: 'Quel est la pire note de Chris lors des partiels de Math a l\'IUT ?',
        answers: [
            {text: '2', correct: false},
            {text: '0', correct: false},
            {text: '2.7', correct: false},
            {text: '2.5', correct: true}
        ]
    },
    {
        question: 'Qui a invent?? l\'expression "Mec, en vrai" ?',
        answers: [
            {text: 'Lenny', correct: true},
            {text: 'Thomas', correct: false},
            {text: 'Fred', correct: false},
            {text: 'William', correct: false}
        ]
    },
    {
        question: 'Fred a-t-il vol?? le code pour faire le quizz ?',
        answers: [
            {text: 'Non il est trop chaud', correct: true},
            {text: 'Non', correct: true},
            {text: 'Qu\'est-ce que le vole apr??s tout ?', correct: true},
            {text: 'Je ne pense pas', correct: true}
        ]
    }

]