console.log('Value types & Reference types');
/* 
## Value types & Reference types

### 1.Value types (Primitive types)
- Number
- String
- Boolean
- Undefined
- BigInt
- Null
- Symbol

### 2.Reference types (Non-primitive types)
- Object
- Array
- Function

### Data types with functions
- Value types
- Reference types
*/

let a1 = 1
let b = a1

b = 2
console.log(a); //1
console.log(b); //2


let car1 = {
    name: 'BMW'
}
let car2 = car1
car2.name = 'Mercedes'

console.log(car1.name); //Mercedes
console.log(car2.name); //Mercedes

let fruits = [
    'Apple',
    'Banana',
    'Cherry'
]

let fruits2 = fruits
fruits2[0] = 'Grapes'


console.log(fruits);
console.log(fruits2);

function func(obj){
    obj.name = 'Tesla'
    console.log(obj); // Tesla
}
const a5 = {
    name: 'Audi'
}
func(a5)
console.log(a5); // { name: 'Tesla' }



// Side effects 
/* 
## Reference type
- Mảng và object khi được tham chiếu sẽ trỏ đến cùng một bộ nhớ ban đầu
khi nó được tạo ra, nếu thay đổi ở phần tham chiếu thì sẽ thay đổi cả giá trị gốc ban đầu
- Điều này có thể dẫn đến những tác động không mong muốn (side effects) trong code
## Value type
- Số, chuỗi, boolean, undefined, null, bigint, symbol
- Khi được gán cho biến mới, giá trị sẽ được sao chép
- Thay đổi giá trị ở biến mới sẽ không ảnh hưởng đến biến gốc vì nó tạo ra 2 vùng nhớ khác nhau
*/

const a8 = {
    name: 'BMW'
}

const b8 = {
    name: 'BMW'
}

const a9 = a8
console.log(a8 === b8); //false, vì khi so sánh 2 object sẽ so sánh địa chỉ bộ nhớ của chúng
console.log(a8 === a9); //true, vì a9 tham chiếu đến cùng một đối tượng với a8
