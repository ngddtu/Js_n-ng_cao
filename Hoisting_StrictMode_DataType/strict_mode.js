console.log('Strict Mode');

// "use strict"; // Bật chế độ nghiêm ngặt

fullName = 'Nguyễn Đình Tuấn' //không có từ khóa khai báo vẫn không hiện lỗi
// => phải thêm use strict ở đầu file js
/* Có 3 cách để sử dụng strict
    1. Sử dụng "use strict"; ở đầu file js
    2. Sử dụng "use strict"; ở đầu function
    3. Sử dụng "use strict"; ở đầu thẻ mở script nếu viết js trong file html
*/

console.log(fullName); //