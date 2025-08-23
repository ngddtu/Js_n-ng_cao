// IIFE - Immediately Invoked Function Expression - Biểu thức hàm được gọi ngay lập tức

//1. IIFE trông như thế nào.  -> OK
//2. Dùng dấu ; trước IIFE -> OK
//3. IIFE là hàm 'private' -> OK
//4. Sử dụng IIFE khi nào? -> OK
//5. Các cách tạo ra một IIFE -> OK
//6. Ví dụ sử dụng IIFE -> OK



// IIFE
//1. IIFE trông như thế nào. 
(function () {
    console.log('NOW')
})()


//2. Dùng dấu ; trước IIFE


let fullName = 'Đình Tuấn'

    //nếu thiếu dấu ; sẽ bị lỗi, trình duyệt sẽ hiểu Đình Tuấn()() -> nên sử dụng ; ngay trước IIFE
    ; (function () {
        console.log('NOW!')
    })()



//3. IIFE là hàm 'private'
let i = 0
    ; (function myFunc() {
        console.log('1');

        i++
        if (i < 10) {
            myFunc
        }
    })()

//myFunc() => không gọi được 




//4. Sử dụng IIFE khi nào?
/* vì IIFE mang tính private, nên khi muốn những gì trong hàm không ảnh hưởng phạm vi GLOBAL thì dùng IIFE */


//6. Ví dụ sử dụng IIFE

const app = {
    cars: [],
    add(car) {
        this.cars.push(car)
    },
    edit(index, carEdit) {
        this.cars[index] = carEdit
    },
    delete(index) {
        this.cars.splice(index, 1)
    }
}

/* Nếu viết như trên, mảng cars có thể dễ dàng truy cập từ bên ngoài dẫn tới tính bảo mật kém, có thể dễ dàng phá huỷ dữ liệu */

//app.cars = null sau đó app.add('BMW') hoặc phương thức khác sẽ ngay lập tức gặp lỗi


const app1 = (function () {
    const cars1 = [] //-> private

    return {
        get(index){
            return cars1[index]
        },
        add(car) {
            cars1.push(car)
        },
        edit(index, carEdit) {
            cars1[index] = carEdit
        },
        delete(index) {
            cars1.splice(index, 1)
        }
    }
})()

app1.add('BMW')


//1