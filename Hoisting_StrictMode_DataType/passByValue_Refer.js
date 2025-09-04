console.log('Pass by Value & Pass by Reference');

/* 
1. Pass by value
- Sao chép giá trị của biến
- Truyền bản sao vào bên trong hàm
* Đặc điểm: Gán lại tham số trong hàm, không làm thay đổi biến bên ngoài hàm.

2. Pass by reference
- Truyền địa chỉ bộ nhớ của biến
- Tham chiếu đến cùng một đối tượng trong bộ nhớ
* Đặc điểm: Gán lại tham số trong hàm sẽ làm thay đổi biến bên ngoài hàm.
*/

function changeValue(y){
    y = 10;
}

const x = 20 
console.log(x); // 20


// Js chỉ có pass by value