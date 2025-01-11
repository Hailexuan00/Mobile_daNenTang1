//===================================================================================
// Hàm kiểm tra số dương
function testNum(a) {
    return a > 0 ? 'Số dương' : 'Không phải số dương';
}
console.log(testNum(-5));
// Kết quả: "Không phải số dương"

//===================================================================================
// Hàm tính phí thành viên
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}
console.log("Phí thành viên là", getFee(true));   // Kết quả: "Phí thành viên là $2.00"
console.log("Phí thành viên là", getFee(false));  // Kết quả: "Phí thành viên là $10.00"
console.log("Phí thành viên là", getFee(null));   // Kết quả: "Phí thành viên là $10.00"

//===================================================================================
// Sử dụng switch-case
const expr = 'Cam';
switch (expr) {
    case 'Tao':
        console.log('Tao giá 20,000/kg.');
        break;
    case 'Cam':
    case 'Buoi':
        console.log('Cam và Bưởi giá 20,000/kg.');
        break;
    default:
        console.log(`Xin lỗi, chúng tôi không có giá cho ${expr}.`);
}
// Kết quả: "Cam và Bưởi giá 20,000/kg."

//===================================================================================
// Vòng lặp for
for (let step = 0; step < 5; step++) {
    // Chạy 5 lần, giá trị đi từ 0 -> 4
    console.log("Đi bộ mỗi bước về phía đông, bước thứ ", step + 1);
}
//===================================================================================
// Vòng lặp do-while
let condition = false; // Đặt điều kiện cụ thể
do {
    console.log("Làm gì đó ở đây");
} while (condition);

//===================================================================================
// Hàm dumpProps để in thuộc tính của một object
const dumpProps = (obj, objName) => {
    let result = "";
    for (const i in obj) {
        result += `${objName}.${i} = ${obj[i]}\n`;
    }
    console.log(result);
};
const myCar = { make: "Ford", model: "Mustang" };
dumpProps(myCar, "car");

//===================================================================================
// Nối hai mảng
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// Kết quả: Array ["a", "b", "c", "d", "e", "f"]

//===================================================================================
// Lọc các từ có độ dài lớn hơn 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Kết quả: Array ["exuberant", "destruction", "present"]

//===================================================================================
// Tìm phần tử đầu tiên lớn hơn 10
const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
console.log(found); // Kết quả: 12

const found2 = array.find((element) => element > 10000);
console.log(found2); // Kết quả: undefined

//===================================================================================
// Tạo một mảng mới từ mảng cũ
const array0 = [1, 4, 9, 16];
const map1 = array0.map((x) => x * 2);
console.log(map1);
// Kết quả: Array [2, 8, 18, 32]

//===================================================================================
// Lặp qua các phần tử trong mảng
const array22 = ['a', 'b', 'c'];
array22.forEach((element) => console.log(element));
// Kết quả: "a", "b", "c"

//===================================================================================
// Lặp qua các cặp key-value của object
const object1 = { a: 'somestring', b: 42 };
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
// Kết quả:
// "a: somestring"
// "b: 42"

//===================================================================================
