//1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh', age: 20 }. Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.

var sinhVien = [
    {
        name: "hieu",
        age: 27
    }
]
sinhVien.push({ name: "kimanh", age: 26 });
sinhVien.push({ name: "trang", age: 25 });
sinhVien.push({ name: "nhat", age: 30 });
student = sinhVien.length;
function tinhTuoiTB() {
    tuoi = 0;
    for (i = 0; i < student; i++) {
        tuoi += sinhVien[i].age;
    }
    tuoiTb = tuoi / sinhVien.length;
    console.log(tuoiTb);
}
tinhTuoiTB(sinhVien);

//2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.

function sapXepTuoi(sapXep) {
    min = sinhVien[0].age;
    for (i = 0; i < student; i++) {
        for (k = i + 1; k < student; k++) {
            if (sinhVien[i].age < sinhVien[k].age) {
                min = sinhVien[i];
                sinhVien[i] = sinhVien[k];
                sinhVien[k] = min;
            }
        }
    }
    console.log(sapXep);
}
sapXepTuoi(sinhVien);

//3. Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
var sinhVien2 = [
    {
        name: "hieu",
        age: 27,
        gender: "male"
    },
    {
        name: "linh",
        age: NaN,
        gender: undefined
    }
]



function checkValue(Value) {
    let wrongValue = [false, null, NaN, 0, "", undefined];
    for (i = 0; i < Value.length; i++) {
        for (let [key, value] of Object.entries(Value[i])) {
            if (wrongValue.includes(value) == true) { delete Value[i][key] }; //[sinhVien[i].age].includes(value)
        }
    }
    console.log(Value);
}
checkValue(sinhVien2);

// 4. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

function stringReverseTest(string) {
    string=string.split(' ').join('').toLowerCase();
    let string2 = "";
    for (let i = 0; i < string.length; i++) {
        string2 = string[i] + string2;
    }
    if( string2 == string) {
        console.log(`Chuỗi có tính đối xứng`)
    }
    else{
        console.log(`Chuỗi không có tính đối xứng`)

    }
}
stringReverseTest("  RaCe Car ");
