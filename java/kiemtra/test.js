//Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function tinhTong(a, b) {
    midNumber = 0;
    for (i = a + 1; i < b; i++) {
        if (i < b) {
            midNumber += i
        }
    }
    console.log(midNumber);
}
tinhTong(3, 8);

//Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

function spinalCase(string) {
    newString = string.toLowerCase().split(" ").join("-");
    console.log(newString);
}
spinalCase("HOW are YoU");

//Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ: với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.

function countTime(str, x) {
    timeArray = str.split(":");
    h = parseInt(timeArray[0]);
    m = parseInt(timeArray[1]);
    s = parseInt(timeArray[2]);
    if (h > 23 || h < 0 || m > 59 || m < 0 || s > 59 || s < 0) {
        console.log("Hãy nhập lại số thời gian ");
    } else {
        timeNumber = h * 3600 + m * 60 + s + x;
        h = Math.floor(timeNumber / 3600);
        m = Math.floor((timeNumber - (3600 * h)) / 60);
        s = timeNumber - (3600 * h) - (60 * m);
    }

    newStr = `${h}:${m}:${s}`;
    console.log(newStr);
}
countTime("09:20:56", 7);

//Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).

function ocSen(h, x, y) {
    numberDay = 1;
    for (quangDg = x; quangDg <= h; quangDg += x) {
        numberDay++;
        if (quangDg >= h) {
            return
        } else {
            quangDg -= y;
        }
    }
    console.log(numberDay);
}
ocSen(10, 9, 2);

//Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.

function softNumber(numb) {
    numbStr = numb.toString().split("");
    for (i = 0; i < numbStr.length; i++) {
        for (k = i + 1; k < numbStr.length; k++) {
            middle = 0;
            if (i == 0 && numbStr[k] == 0) {
                continue;
            } else if (numbStr[i] > numbStr[k]) {
                middle = numbStr[k];
                numbStr[k] = numbStr[i];
                numbStr[i] = middle;
            }
        }
    }
    console.log(numbStr);
}
softNumber(530751);

//Tạo 1 trang HTML có một nút để thay đổi màu nền của trang web và hiển thị tên màu tương ứng. Random màu bất kỳ, sử dụng mã hex, biết rằng, mã hex được tạo thành từ các ký tự sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'].

function changeColor() {
    color = [];
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (i = 0; i < 6; i++) {
        ranDom = Math.floor(Math.random() * 15) + 1;
        color.push(array[ranDom]);
    }
    x = color.toString().split(",").join("");
    hexColor = `#${x}`
    document.getElementById("body").style.backgroundColor = `${hexColor}`;
    document.getElementById("button").innerHTML = `#${x}`

}