console.log("--------Bài 1: XỬ LÝ DỮ LIỆU VỚI CÁC PHƯƠNG THỨC CỦA MẢNG--------");
// Danh sách sinh viên từ các lớp
const class1 = [
    {
        mssv: 'PS0000', name: 'Nguyen Van A', avgPoint: 8.9, avgTraningPoint: 7, status: 'pass',
    },
    {
        mssv: 'PS0001', name: 'Nguyen Van B', avgPoint: 4.9, avgTraningPoint: 10, status: 'pass',
    },
];

const class2 = [
    {
        mssv: 'PS0002', name: 'Nguyen Van C', avgPoint: 4.9, avgTraningPoint: 10, status: 'failed',
    },
    {
        mssv: 'PS0003', name: 'Nguyen Van D', avgPoint: 10, avgTraningPoint: 10, status: 'pass',
    },
    {
        mssv: 'PS0004', name: 'Nguyen Van E', avgPoint: 10, avgTraningPoint: 2, status: 'pass',
    },
];

// Gộp danh sách sinh viên từ nhiều lớp
const allStudents = class1.concat(class2);

// Lọc ra danh sách sinh viên có trạng thái "pass"
const eligibleStudents = allStudents.filter(student => student.status === 'pass');

// Sắp xếp danh sách theo điểm trung bình giảm dần
const sortedByAvgPoint = [...eligibleStudents].sort((a, b) => b.avgPoint - a.avgPoint);

// Sắp xếp danh sách theo điểm rèn luyện giảm dần 
const sortedByTraningPoint = [...eligibleStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// Lấy thông tin Ong vàng (sinh viên có điểm số cao nhất)
const goldenBee = sortedByAvgPoint[0];

// Xuất kết quả
console.log('Danh sách sinh viên theo điểm trung bình giảm dần:', sortedByAvgPoint);
console.log('Danh sách sinh viên theo điểm rèn luyện giảm dần:', sortedByTraningPoint);
console.log('Thông tin Ong vàng:', goldenBee);

//---------------------------------------------------------------------------------


console.log("--------Bài 2: Xử lý dữ liệu với các phương thức của object--------");
// Dữ liệu đầu vào được cung cấp
const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
];

function convertArrayToObject(array) {
    const validProducts = array.filter(
        item => item && item.code && item.name
    );

    // Chuyển đổi danh sách sản phẩm thành object
    const productObject = Object.fromEntries(
        validProducts.map(product => [product.code, product])
    );

    return productObject;
}

// Chuyển đổi dữ liệu
const newData = convertArrayToObject(oldData);

// Xuất kết quả
console.log('Dữ liệu sản phẩm sau khi chuyển đổi:', newData);

// Lấy thông tin mỹ phẩm có mã "ab"
console.log('Thông tin sản phẩm có mã "ab":', newData['ab']);

//---------------------------------------------------------------------------------


console.log("--------Bài 3: Xử lý bất đồng bộ trong javascript--------");

// Tạo 3 Promise
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 đã hoàn thành"), 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 2 bị lỗi"), 2000);
});

const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 đã hoàn thành"), 2000);
});

// Sử dụng Promise.all để chờ tất cả các Promise
Promise.all([firstPromise, secondPromise, thirdPromise])
    .then((ketQua) => {
        console.log("Tất cả promise đã hoàn thành:", ketQua);
    })
    .catch((loi) => {
        console.error("Có một promise bị lỗi:", loi);
    });


// Sử dụng Promise.allSettled để đảm bảo chạy bất kể lỗi hay thành công
Promise.allSettled([firstPromise, secondPromise, thirdPromise])
    .then((ketQua) => {
        ketQua.forEach((promise, index) => {
            if (promise.status === "fulfilled") {
                console.log(`Promise ${index + 1} thành công:`, promise.value);
            } else {
                console.error(`Promise ${index + 1} thất bại:`, promise.reason);
            }
        });
        console.log("Tất cả promise đã được xử lý.");
    })
    .finally(() => {
        console.log("Chương trình đã hoàn tất.");
    });




