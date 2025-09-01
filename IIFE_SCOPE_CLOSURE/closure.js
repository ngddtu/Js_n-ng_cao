/* 
#Closure
- Là một hàm có thể ghi nhớ nơi nó dược tạo và truy cập được biến ở bên
ngoài phạm vi của nó.

##Ứng dụng
- Viết code ngắn gọn hơn
- Biểu diễn, ứng dụng tính Private trong OOP

##Lưu ys
- Biến được tham chiếu (refer) trong closure sẽ không được xóa
khỏi bộ nhớ khi hàm cha thực thi xong
- Các khái niệm Javascript nâng cao rất dễ gây hiểu lầm
*/


//##Ứng dụng 

function logger3 (head) {
    function logMess(message) {
    return `[${head}] - ${message}`;
    }

    return logMess;
}

const logger2 = logger3('INFO');
console.log(logger2('This is a log message'));


function createApp (){
    const cars =  [];
    return {
        addCar: function(car) {
            cars.push(car);
        },
        getCars: function() {
            return cars;
        }
    };
}
