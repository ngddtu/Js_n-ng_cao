console.log('This');

/* 
## This
- Từ khóa this trong js đề cập đến đối tượng mà nó thuộc về.

* Đặc tính
1. Trong một phương thức, this tham chiếu tới đối tượng truy cập 
phương thức (đối tượng trước dấu .)
2. Đứng ngoài phương thức, this tham chiếu tới đối tượng ngoài global.

*Lưu ý 
1. This trong hàm tạo là đại diện cho đối tượng sẽ được tạo.
2. This trong một hàm là undefined khi ở chế độ strict.
3. Các phương thức bind(), call(), apply() có thể tham chiếu 
this tới đối tượng khác.
*/


const iphone7 = {
    //properties
    name: 'iphone 7',
    color: 'pink',

    //prototype
    takePhoto() {
        console.log(this);
    },
    objectChild: {
        name: 'object child',
        methodChild() {
            console.log(this); // this tham chiếu tới đối tượng objectChild
        }
    }
}

iphone7.takePhoto(); // this tham chiếu tới đối tượng iphone7
iphone7.objectChild.methodChild(); // this tham chiếu tới đối tượng objectChild

/* 
📌 Tóm lại:

Context = giá trị của this trong lúc chạy.

Context phụ thuộc vào cách gọi hàm, chứ không phải cách định nghĩa hàm.

Dùng call, apply, bind để thay đổi context.

Arrow function không có context riêng.

*/

function sayHello1() {
    console.log(this);
}

sayHello1(); // trong strict mode: undefined, ngoài strict mode: window (trình duyệt)



const person1 = {
    name: "Tuan",
    sayHello2: function () {
        console.log(this.name);
    }
};

const hello = person1.sayHello2;
hello(); // undefined (vì context mất, quay về global)




const person3 = {
    name: "Tuan",
    sayHello3: () => {
        console.log(this.name);
    }
};

person3.sayHello3(); // undefined



const person = {
    name: "Tuan",
    sayHello: function () {
        console.log(this.name);
    }
};

person.sayHello(); // "Tuan"
