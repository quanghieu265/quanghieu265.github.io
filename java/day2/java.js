//1. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm.

function ngayThangNam() {
    let date = new Date();
    console.log(`Hôm nay là ${date}`);
    let season = date.getMonth();
    if (season >= 0 && season <= 2) {
        console.log("Bây giờ là mùa xuân");
    }
    else if (season >= 3 && season <= 5) {
        console.log("Bây giờ là mùa hè");
    }
    else if (season >= 6 && season <= 8) {
        console.log("Bây giờ là mùa thu");
    }
    else {
        console.log("Bây giờ là mùa đông");
    }
}
ngayThangNam();

//2. Viết hàm trả về số ngày có trong 1 tháng.

function soNgay(year, month) {
    if ( year < 1 || month < 1 || month > 12) {
        return;
    }

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        console.log("Tháng này có 31 ngày");
    }
    else if (month === 2) {
        if (year % 4 === 0 || year % 400 === 0) {
            console.log(`${year} là năm nhuận`);
            console.log("Tháng này có 29 ngày");
        }
        else {
            console.log(`${year} là năm không nhuận`);
            console.log("Tháng này có 28 ngày");
        }

    }
    else {
        console.log("Tháng này có 30 ngày")
    }
}
soNgay(2020, 2);

// 3. Tính tổng các chữ số trong 1 số nguyên dương

function tinhTong(numb) {
    if (numb < 10) {
        console.log(numb);
    }
    else {
        let sum = 0;
        while (numb) {
            sum += numb % 10;
            numb = Math.floor(numb / 10);
        }
        console.log(sum);
    }
}
tinhTong(456);

/*4. In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi 
lấy 10 ký tự và hiển thị phía sau là dấu ba chấm (10 kí tự + ...) */

function inChuoi(str) {
    if (str.length <= 10) {
        console.log(str);
    }
    else {
        console.log(`${str.substring(0, 11)} ...`);
    }
}
inChuoi("duoi10kytu")
inChuoi("tren 10 ky tu");

//5. Viết hàm có tính năng translate.

function translate(country) {
    switch (country) {
        case "French":
            console.log("Bonjour");
            break
        case "Germany":
            console.log("Hallo");
            break
        case "Italy":
            console.log("Ciao");
            break
        case "Croatia":
            console.log("Bok");
            break
        default:
            console.log("Xin chao");
    }
}
translate("French");
translate("asd");

// kiểm tra xem N có phải số nguyên tố hay không
function soNguyenTo(N) {
    if (N <2 ) {
        return;
    }
    if ( N === 2) {
        console.log(`${N} là số nguyên tố`);
    }
    else if (N >2 && (N % 2 === 0 || N % Math.sqrt(N) === 0)) {
        console.log(`${N} không là số nguyên tố`);
    }
    else {
        console.log(`${N} là số nguyên tố`);
    }
}
soNguyenTo(96);