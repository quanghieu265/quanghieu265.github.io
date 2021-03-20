// Tìm số nguyên tố

function soNguyenTo(numb) {
    if (numb < 2) {
        console.log(`${numb} không phải là số nguyên tố`);
    }
    else if (numb === 2 || numb === 3) {
        console.log(`${numb} là số nguyên tố`);
    }
    else {
        let soNT = true;
        for (let i = 2; i < numb - 1; i++) {
            if (numb % i === 0) {
                soNT = false;
                break;
            }
        }
        if (soNT == false) {
            console.log(`${numb} không phải là số nguyên tố`);
        }
        else {
            console.log(`${numb} là số nguyên tố`);
        }
    }

}
soNguyenTo(7);

//1. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).

function soHoanHao(n1) {
    if (n1 < 1) {                                  // điều kiện thứ nhất, n1 phải là số nguyên dương
        console.log("Đây không phải là số nguyên dương");
        return;
    }
    else {
        for (let j = n1 - 1; j > 0; j--) {         // điều kiện thứ hai: các số nhỏ hơn n1
            let sum = 0;                           //tạo biến chứa kết quả tổng các ước
            for (let k = j - 1; k > 0; k--) {
                if (j % k === 0) {                 // điều kiện để tính tổng các ước
                    sum += k;
                }
            }
            if (sum === j) {                       // điều kiện để là số hoàn hảo
                console.log(`${j} là số hoàn hảo nhỏ hơn ${n1}`);
            }
        }

    }
}
soHoanHao(30);

//2. Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên

function findMax(array) {
    let max = array[0];                                   //tạo biến để chứa phần tử của mảng
    let a = array.length;
    for (counter = 0; counter < a; counter++) {    // tạo vòng lặp để trích xuất các phần tử của mảng
        if (array[counter] > max) {                // tạo điều kiện để gắn phần tử vào trong biến max đã tạo
            max = array[counter];
        }
    }
    console.log(max);
}

function findMin(array) {
    let min = array[0];
    let a = array.length;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] < min) {
            min = array[counter];
        }
    }
    console.log(min);
}

findMax([31, 6, 8, 4, 109, 5, 6, 77, 2, 99, 65]);
findMin([31, 6, 8, 4, 109, 5, 6, 77, 2, 99, 65]);

//3. Tìm số lớn thứ 2 trong mảng số nguyên
function findMax2(array) {
    let max1 = array[0];
    let max2 = array[0];
    let a = array.length;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] > max1) {
            max1 = array[counter];
        }
        if (max1 > array[counter] && array[counter] > max2) {
            max2 = array[counter];
        }
    }
    console.log(max2);
}
findMax2([31, 6, 8, 4, 109, 5, 6, 77, 2, 99, 65]);

//4. Trả về Vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.

function soLeChan(array) {
    let mangLeChan = [];
    let a = array.length;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] % 2 === 0) {
            mangLeChan.push(array[counter]);
        }
        if (array[counter] % 2 !== 0) {
            mangLeChan.unshift(array[counter]);
        }
    }
    return mangLeChan;
}
console.log(soLeChan([31, 6, 8, 4, 109, 5, 6, 77, 2, 99, 65]));

// Tra ve vi tri cuoi cung cua so chan trong mang

function findLastEven(arr1) {
    for (let i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i] % 2 === 0) {
            return `Index: ${i} - value: ${arr1[i]}`;
        }
    }
}

let arr1 = [-4, 0, -3.6, -5, 8, 6, 9, 4, -6, 2, 7];


console.log(findLastEven(arr1));

//5. In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH)

function inChuoi(string1) {
    let string2 = "";
    for (let q = 0; q < string1.length; q++) {
        string2 = string1[q] + string2;

    }
    console.log(string2);
}

inChuoi("xin chao cac ban");
//6. Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần.

function sapXepTang(arrNum) {
    for (up = 0; up < arrNum.length; up++) {
        if (arrNum[up] < 1) {       //Điều kiện là mảng số nguyên
            console.log(`${arrNum} không phải là mảng các số nguyên`)
            return;
        }
    }
    for (n1 = 0; n1 < arrNum.length - 1; n1++) {    //vòng lặp cho số đầu tiên
        for (n2 = n1 + 1; n2 < arrNum.length; n2++) {   // vòng lặp cho số thứ 2
            let mid = [];                           // biến trung gian để thay đổi giá trị 2 số
            if (arrNum[n1] > arrNum[n2]) {          // so sánh 2 số để đổi chỗ và giá trị cho nhau
                mid = arrNum[n2];
                arrNum[n2] = arrNum[n1];
                arrNum[n1] = mid;
            }
        }
    }
    console.log(arrNum);
}

sapXepTang([9, 8, 1, 6, 7, 3, 9, 5, 4, 1]);

