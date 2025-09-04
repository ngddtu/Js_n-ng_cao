console.log('-----------------------Bind_Call_Apply-----------------------');


this.firstName = "Đình"
this.lastName = "Tuấn"



const human = {
    firstName: 'Ngô',
    lastName: 'Phương',
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(human.getFullName()); // Ngô Phương

const getName = human.getFullName

console.log(getName()); // Đình Tuấn
//khi gán getName = human.getFullName, thực chất là ta đang truyền một tham chiếu đến hàm getFullName mà không có ngữ cảnh của đối tượng human,

//vùng nhớ của getName và human.getFullName sẽ giống nhau => getName sẽ là hàm tham chiếu có ngữ cảnh là global
console.log(getName === human.getFullName);

//dùng bind để giàng buộc
console.log('dùng bind để giàng buộc');

const getName2 = human.getFullName.bind(human);

console.log(getName2()); // Ngô Phương


const human2 = {
    getFullName2 (data1, data2) {
        return `${data1} ${data2}`;
    }
    //sau khi dùng bind thì có thể nhận tham số 
}

const getName3 = human2.getFullName2.bind(human2);

console.log(getName3('Ngô', 'Phương')); // Ngô Phương



console.log('-----------------------------BIND PART 2------------------------------');


const $ = document.querySelector.bind(document);

let button = $('button');
button.onclick = function() {
    console.log('Button clicked');
}







