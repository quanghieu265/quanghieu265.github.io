/* 1. Hai anh em nhà cừu không có gì chơi, thằng anh mới đố thằng em: “Tao cho mày 1 số, nếu nó chẵn thì chia đôi, nó lẻ thì nhân 3 cộng 1. Đố mày biết sau bao nhiêu phép tính thì nó ra 1 ???”.
 Ông em ngẩn tò te không biết trả lời như nào. Bạn hãy giúp chú bé 1 tay với. In ra đáp án hoặc “-1” nếu ko có số nào hợp lệ.*/

function giaiDo(number) {
    let dem = 0;
    let a = number;
    do {
        if (a % 2 !== 0) {
            a = a * 3 + 1;
            dem++;
        }
        a = a / 2;
        dem++;
        if (a === 1) {
            console.log(`Cần ${dem} phép tính để nó ra 1`);
            break;
        }
        if (a < 1) {
            console.log(-1);
            break;
        }
    }
    while (a >= 1);
}
giaiDo(12);

document.writeln(
    "Bài 2: Vẽ hình chữ nhật đặc (kích thước mxn):"
);
document.writeln("<br>");
function drawRectangle(m, n) {
    if (
        m <= 0 ||
        n <= 0 ||
        Number.isInteger(m) === false ||
        Number.isInteger(n) === false
    ) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "<br>";
        str += "<br>";
        for (let j = 0; j < m; j++) {
            str += "* ";
        }
    }
    document.writeln(str);
}
drawRectangle(7, 4);

document.writeln("<br>");
document.writeln("Bài 3. Vẽ hình chữ nhật rỗng:");

function drawEmptyRectangle(m, n) {
    if (
        m <= 0 ||
        n <= 0 ||
        Number.isInteger(m) === false ||
        Number.isInteger(n) === false
    ) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "<br>";
        str += "<br>";
        for (let j = 0; j < m; j++) {
            if (0 < i && i < n - 1 && 0 < j && j < m - 1) {
                str += "\xa0 \xa0";

            }
            else {
                str += "* ";
            }

        }
    }
    document.writeln(str);
}
drawEmptyRectangle(7, 4);

document.writeln("<br>");
document.writeln("Bài 4.  Vẽ tam giác vuông:");

function drawRightRectangle(m, n) {
    document.writeln("<br>");
    if (
        m <= 0 ||
        n <= 0 ||
        Number.isInteger(m) === false ||
        Number.isInteger(n) === false
    ) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }

    let str = "";
    for (i = 0; i < m; i++) {
        for (j = 0; j <= i; j++) {
            str += "* "
        }
        str += "<br>"
        str += "<br>"
    }
    document.writeln(str);
}
drawRightRectangle(7, 1);

document.writeln("<br>");
document.writeln("5. Vẽ tam giác cân ngược:");

function drawIsoRectangle(m, n) {
    document.writeln("<br>");
    if (
        m <= 0 ||
        n <= 0 ||
        Number.isInteger(m) === false ||
        Number.isInteger(n) === false
    ) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }

    let str = "";
    for (let i = 0; i < n; i++) {
        str += "<br>";
        str += "<br>";
        for (let j = 0; j < m; j++) {
            if (j>=i && j < m - i) {
                str += "* ";
            }
            else {
                str += "\xa0 ";
            }
        }
    }
    document.writeln(str);
}
drawIsoRectangle(7, 4);



