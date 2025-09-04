const teacher1 = {
    firstName: 'Ngô',
    lastName: 'Phương',
    isOnline: false,
    goOnlinde(){
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} đã online`);
    },
    goOffline(){
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} đã offline`);
    }
}

teacher1.goOnlinde();
console.log('Teacher:', teacher1.isOnline);

console.log('----------------------------');


const me10 = {
    firstName: 'Đình',
    lastName: 'Tuấn',
}

teacher1.goOnlinde.call(me10);
console.log('Sutdent:', me10.isOnline)

// -----------------------------KẾ THỪA-------------------------------
function Animal1(name,weight){
    this.name = name;
    this.weight = weight;
}

function Parrot(){
    Animal1.apply(this, arguments);
    this.speak = function() {
        console.log('Nhà có khách');
    }
}

const conVet = new Parrot('Vẹt', 0.5);
console.log(conVet);

conVet.speak();




// function greet(greeting, message) {
//     return `${greeting}, ${message}. My name is ${this.firstName} ${this.lastName}.`;
// }

// console.log(greet.call(teacher1,'Xin chào', 'Rất vui được gặp bạn'));

// console.log(greet.apply(teacher1,['Xin chào', 'Rất vui được gặp bạn']));




    