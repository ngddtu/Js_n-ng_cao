console.log('-----------------------CALL--------------------------');

/* 
## CALL METHOD
- Là phương thức trong prototype của Function constructor, phương thức này được dùng để gọi hàm và cũng có thể bind this cho hàm

*Ví dụ
1. Gọi hàm với call method
2. Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
3. Thể hiện tính kế thừa trong OOP
4. Mượn hàm, thêm ví dụ với arguments
*/

const teacher = {
    firstName: 'Ngô',
    lastName: "Phương",
}


const me = {
    firstName: 'Đình',
    lastName: "Tuấn1",
    soFullNameMe (){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.soFullNameMe.call(me) // Nguyễn Đình Tuấn
me.soFullNameMe.call(teacher)  // mượn hàm




//3. Thể hiện tính kế thừa trong OOP
function Animal(name, weight){
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, eggCount){
    Animal.call(this, name, weight);
    this.eggCount = eggCount;
}


const chicken = new Chicken('Gà', 2, 5);
console.log(chicken);

//4. Mượn hàm, thêm ví dụ với arguments

function logger10 (){
    console.log(...arguments);
    console.log(arguments);
    console.log(Array.from(arguments));
    const arr = Array.prototype.forEach.call(arguments, (item) => {
        console.log(item);
    });

}


logger10(1,2,3,4,5);