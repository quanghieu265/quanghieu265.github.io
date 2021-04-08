const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
//tạo biến chứa câu hỏi sẽ hiện thỉ
let currentQuestion = {};
//tạo biến chứa số điểm
let score = 0;
//tạo biến chứa số câu hỏi
let questionCounter = 0;
//tạo biến chứa mảng các câu hỏi đã tạo
let availableQuestion = [];

let questions = [{
        question: "2+2=?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
        ]
    },
    {
        question: "2+1=?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
        ]
    },
    {
        question: "2+0=?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
        ]
    },
    {
        question: "2-1=?",
        answer: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
        ]
    }
]
let maxQuestion = 4;
//tạo hàm khi bắt đầu
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions]; // thêm giá trị của mảng question vào biến đã tạo
    getNewQuestion();
}

getNewQuestion = () => {
    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter} of ${maxQuestion}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestion) * 100}%`;
    //tạo 1 số ngẫu nhiên để tráo câu hỏi
    let random = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[random];
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
            for (let i = 0; i < choices.length; i++) {
                choices[i].innerHTML = currentQuestion.answer[i].text;
            };
        })
        //tạo giá trị để tránh lặp lại câu hỏi
    availableQuestion.splice(random, 1);

}

startGame();