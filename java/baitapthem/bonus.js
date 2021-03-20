//1. Đếm số nguyên tố trong đoạn [a, b]

function demSoNT(array) {
    let mangSoNt = [];
    let dem = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] < 2) {
            continue;
        }
        else if (array[i] === 2 || array[i] === 3) {
            mangSoNt.push(array[i]);
            dem++;
        }
        else {
            let soNT = true;
            for (let k = 2; k < array[i] - 1; k++) {
                if (array[i] % k === 0) {
                    soNT = false;
                    break;
                }
            }
            if (soNT == false) {
                continue;
            }
            else {
                mangSoNt.push(array[i]);
                dem++;
            }
        }
    }
    console.log(`có tất cả ${dem} số nguyên tố ở trong mảng, đó là ${mangSoNt}`);
}
demSoNT([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//2. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.

function pushAfterMax(array, number) {
    let max = array[0];
    let a = array.length;
    for (z = 0; z < a; z++) {
        if (array[z] > max) {
            max = array[z]
        }
    }
    for (w = 0; w < a; w++) {
        if (array[w] === max) {
            array.splice(w + 1, 0, number);
        }
    }
    console.log(array);
}
pushAfterMax([2, 5, 7, 8, 1, 44, 5, 6, 7, 8,], 99);

//3. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.

function sapXepTang(arrNum, numberX) {
    arrNum.push(numberX);
    for (n1 = 0; n1 < arrNum.length - 1; n1++) {
        for (n2 = n1 + 1; n2 < arrNum.length; n2++) {
            let mid = [];
            if (arrNum[n1] > arrNum[n2]) {
                mid = arrNum[n2];
                arrNum[n2] = arrNum[n1];
                arrNum[n1] = mid;
            }
        }
    }
    console.log(arrNum);
}
sapXepTang([9, 8, 1, 6, 7, 3, 5, 4], 2);
//4. Kiểm tra tính đối xứng của một số.

function tinhDoiXung(number) {
    let string1 = number.toString();
    let string2 = "";
    for (let q = 0; q < string1.length; q++) {
        string2 = string1[q] + string2;

    }
    if (string2 == number) {
        console.log(` số ${number} có tính đối xứng`);
    }
    else {
        console.log(` số ${number} không có tính đối xứng`);

    }
}
tinhDoiXung(123454321);
//5. Viết chương trình tính tiền cước TAXI.
function tinhTienTaxi(km, minute) {
    let tienXe = 0;
    let tienCho = minute * 20000 / 60;
    if (km > 30) {
        tienXe = 9000 + (30 - 1) * 11000 + (km - 30) * 9500;
    }
    else if (1 < km && km <= 30) {
        tienXe = 9000 + (km - 1) * 11000;
    }
    else if (0 <= km && km <= 1) {
        tienXe = 9000;
    }
    else {
        console.log(`Xin mời quý khách lên xe`)
    }
    let tongTien = tienXe + tienCho;
    console.log(`Tiền xe của quý khách là ${tienXe}.
    Phụ phí xe chờ là ${tienCho}.
    Tổng tiền là ${tongTien}.`);
}
tinhTienTaxi(1, 60);