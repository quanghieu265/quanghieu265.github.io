// Gán nút vào biến
var keys = document.querySelectorAll('#calculator span');
// Gán các dấu vào biến để kiêm tra
var operators = ['+', '-', 'x', '÷'];

//Tạo vòng lặp chạy function cho các nút.
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function() {
        //Màn hình hiển thị 
        var input = document.querySelector('.screen');
        var result = document.querySelector('.screen1');
        var inputVal = input.innerHTML;
        // Biến chứa giá trị của nút
        var btnVal = this.innerHTML;
        var total;
        //Nếu đó là nút C thì clear screen về rỗng
        if (btnVal == 'C') {
            input.innerHTML = '';
            result.innerHTML = '';
        }
        //Nếu đó là nút DEL
        else if (btnVal == "DEL") {
            input.innerHTML = input.innerHTML.slice(0, -1);
            if (input.innerHTML.length === 0) {
                input.innerHTML = "";
            }
        }
        //Nếu đó là nút =
        else if (btnVal == '=') {
            var equation = inputVal;
            //Gán biến để kiểm tra ký tự cuối cùng
            var lastChar = equation[equation.length - 1];
            // Đổi ký tự hiển thị về đúng giá trị để xử lý phép tính
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, "/ 100").replace(/\^2/g, "**2");
            // kiểm tra nếu giá trị nhập vào có các dấu [ + - x ÷ . ] ở vị trị cuối cùng thì sẽ xóa các dấu đó đi
            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');
            //Tính toán kết quả
            if (equation) {
                total = eval(equation);
                //Lấy giá trị kết quả sau dấu thập phân

                if (total.toString().indexOf('.') != -1)
                    total = total.toFixed(2);

                result.innerHTML = total;
            }
        }
        // khi bấm vào các nút + - x ÷
        else if (operators.indexOf(btnVal) > -1) {
            //Gán biến để kiểm tra ký tự cuối cùng
            var lastChar = inputVal[inputVal.length - 1];
            //Kiểm tra nếu ký tự cuối ( không chuỗi rỗng) chưa có dấu [+ - x ÷] thì add dấu vào
            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;
            // kiểm tra trường hợp add dấu "-" vào đầu chuỗi
            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;
            //Kiểm tra nếu ký tự cuối  nếu có chứa dấu [+ - x ÷] thì add dấu mới vào và bỏ dấu cũ
            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
        }

        // khi bấm vào các nút khác
        else {
            input.innerHTML += btnVal;
        }
    }
}