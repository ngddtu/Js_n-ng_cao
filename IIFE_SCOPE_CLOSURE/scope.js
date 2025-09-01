//----------------------SCOPE---------------------------
// SCOPE: phạm vi

/* - Các loại phạm vi
        + Global Scope: phạm vi toàn cục
        + Code block - Khối mã: let, const
        + Local scope - Hàm: var, function
    - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo -> OK
    - Các hàm có thể truy cập các biến được khai báo trong 
    phạm vi của nó và bên ngoài nó  -> OK
    - Cách thức một biến được truy cập -> OK
    - Khi nào một biến bị xóa khỏi bộ nhớ? 
        - Biến toàn cầu?
        - Biến trong code block & trong hàm?
        - Biến trong hàm được tham chiếu bởi 1 hàm?
*/
{
    var age = 18  
    /* nếu dùng var thì biến sẽ nhảy ra bên ngoài, phạm vi gần nhất */
    const age1 = 20
}

function get() {
    console.log(age);
    // console.log(age1); //lỗi, vì age1 không thể truy cập bên ngoài code block
}

get()


//- --------Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo--------
//--------- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó --------
const fullName1 = "Ngô Phương"; // Biến bên ngoài
function logger (a,b){
    console.log(a,b);

    const age = 21;
    console.log(age, fullName1); //biến bên trong phạm vi
    
}

logger(1,2);
logger(3,4);

// sẽ tạo ra 2 pvi hàm khi gọi hàm, nếu chưa gọi sẽ không có phạm vi


// ---------  Cách thức một biến được truy cập  --------
const tuoi = 21 
{
    {
        {
            {
                const tuoi1 = 22; //biến trong code block sẽ, sẽ in ra 22 vì nó được khai báo trong cùng một phạm vi
                console.log(tuoi);

                // const tuoi = 22; nếu khai báo như này thì sẽ lỗi vì log đang chạy trước 
                // khi biến được tạo
                
            }
        }
    }
}


// -------- - Khi nào một biến bị xóa khỏi bộ nhớ? ----------------
//  1.Biến toàn cầu?
//  - Biến toàn cầu sẽ chỉ bị xóa khi trang web được đóng lại

//  2.Biến trong code block & trong hàm?
// Biến trong code block & trong hàm sẽ bị xóa khi ra khỏi phạm vi

//  3.Biến trong hàm được tham chiếu bởi 1 hàm?

function makeCounter() {
    let couter = 0

    function increase() {
        return ++couter
    }

    return increase
}

const increase1 = makeCounter() //khi gọi hàm makeCounter sẽ tạo ra phạm vi mới
console.log(increase1());
console.log(increase1());
console.log(increase1());


// biến couter sẽ không bị xóa vì hàm increase vẫn tham chiếu đến nó

