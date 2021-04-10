const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const scoreDisplay = document.querySelector('.end-text');
const btn = document.querySelector('.btn');
//tạo biến chứa câu hỏi sẽ hiện thỉ
let currentQuestion = {};
//tạo biến chứa số điểm
let score = 0;
//tạo biến chứa số câu trả lời đúng
let correctAns = 0;
//tạo biến chứa số câu hỏi
let questionCounter = 0;
//tạo biến chứa mảng các câu hỏi đã tạo
let availableQuestion = [];
//tạo mảng câu hỏi
let questions = [{
            question: "Trong Javascript sự kiện Onchange thực hiện khi nào?",
            correct: "Xảy ra khi giá trị của một trường trong form được người dùng thay đổi",
            answer: [
                { text: "Khi một đối tượng trong form mất focus" },
                { text: " Khi một đối tượng trong form có focus" },
                { text: "Xảy ra khi giá trị của một trường trong form được người dùng thay đổi" },
                { text: "Khi click chuột vào nút lệnh" },
            ]
        },
        {
            question: "Trong Javascript sự kiện OnMouseOver thực hiện khi nào?",
            correct: "Khi di chuyển con chuột qua một đối tượng trong form",
            answer: [
                { text: "Khi một đối tượng trong form mất focus" },
                { text: "Khi một đối tượng trong form có focus" },
                { text: "Khi di chuyển con chuột qua một đối tượng trong form" },
                { text: "Khi click chuột vào nút lệnh" },
            ]
        },
        {
            question: "Trong Javascript sự kiện Onclick xảy ra khi nào?",
            correct: "Khi click chuột vào nút lệnh",
            answer: [
                { text: "Khi một đối tượng trong form mất focus" },
                { text: "Khi một đối tượng trong form có focus" },
                { text: "Khi click chuột vào một đối tượng trong form" },
                { text: "Khi click chuột vào nút lệnh" },
            ]
        },
        {
            question: "Thẻ <input type=”Submit” dùng để làm gì?",
            correct: "Tạo một nút lệnh dùng để gửi tin trong form đi",
            answer: [
                { text: "Tạo một ô text để nhập dữ liệu" },
                { text: "Tạo một nút lệnh dùng để gửi tin trong form đi" },
                { text: "Tạo một nút lệnh dùng để xóa thông tin trong form" },
                { text: " Tất cả các ý trên" },
            ]
        }
    ]
    //giới hạn câu hỏi
let maxQuestion = questions.length;

//tạo hàm khi bắt đầu
startGame = () => {
    //set các giá trị về mặc định
    correctAns = 0;
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions]; // thêm giá trị của mảng question vào biến đã tạo
    //chạy hàm tạo câu hỏi
    getNewQuestion();
}

let interval = undefined;

getNewQuestion = () => {

        //Tạo hàm đếm ngược thời gian
        timePlay = 15;
        $(".time").html(`${timePlay}s`);
        interval = setInterval(countDown, 1000);

        function countDown() {
            timePlay--;
            $(".time").html(`${timePlay}s`);
            if (timePlay == 0) {
                clearInterval(interval);
                getNewQuestion()
            }
        };

        //Điều kiện kết thúc game
        if (availableQuestion.length == 0 || questionCounter > maxQuestion) {
            clearInterval(interval);
            document.getElementById('game').classList.add('hidden');
            document.getElementById('end').classList.remove('hidden');
            scoreDisplay.innerHTML = `Bạn đã trả lời đúng ${correctAns} trên ${maxQuestion} câu hỏi  <br>
            Điểm số của bạn là ${score}`;
            btn.addEventListener('click', function() {
                location.reload();
            })


        }
        //tạo điểm số
        scoreText.innerHTML = score;

        //tạo thanh tiến trình
        questionCounter++;
        progressText.innerHTML = `Question ${questionCounter} of ${maxQuestion}`;
        progressBarFull.style.width = `${(questionCounter/maxQuestion) * 100}%`;

        //tạo 1 số ngẫu nhiên để tráo câu hỏi
        let random = Math.floor(Math.random() * availableQuestion.length);

        //tạo câu hỏi
        currentQuestion = availableQuestion[random]; //tạo biến chứa câu hỏi
        question.innerText = currentQuestion.question //in câu hỏi ra html

        //in các đáp án ra ô lựa chọn đã tạo
        for (let i = 0; i < choices.length; i++) {
            choices[i].innerHTML = currentQuestion.answer[i].text;
        }

        //tạo giá trị để tránh lặp lại câu hỏi
        availableQuestion.splice(random, 1);


    }
    //tạo hàm trợ giúp
function help() {
    let helpNumber = 0;
    let arrayRandom = [0, 1, 2, 3];
    for (let i = 0; i < choices.length; i++) {
        let randomHelp = Math.floor(Math.random() * arrayRandom.length);
        if (choices[arrayRandom[randomHelp]].innerHTML !== currentQuestion.correct) {
            choices[arrayRandom[randomHelp]].innerHTML = '';
            helpNumber++;
        }
        arrayRandom.splice(randomHelp, 1);
        if (helpNumber == 2) {
            break;
        }
    }
    document.querySelector('.btn1').disabled = true;
}
//tao sự kiên khi click vào các đáp án
choices.forEach(choice => {
    choice.addEventListener("click", function() {
        clearInterval(interval);
        //Gán đáp án đúng vào biến
        let selectChoice = currentQuestion.correct;
        //tạo 1 class chứa 2 CSS đã tạo dựa trên điều kiện
        let classApply = selectChoice == this.innerHTML ? 'correct' : 'incorrect'
        if (classApply === 'correct') {
            score += 100
            correctAns++;
        }
        //add class vào phần tử đc click
        this.parentElement.classList.add(classApply);
        //tạo hàm để sau 1 khoảng thời gian sẽ remove class đã chèn và chuyển câu
        setTimeout(() => {
                this.parentElement.classList.remove(classApply);
                getNewQuestion();
            }, 1000) //set thời gian (1s)

    })
})


startGame();