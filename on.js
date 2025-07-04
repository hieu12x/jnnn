// Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


// Khởi tạo lớp đối tượng nguoi
class Nguoi {
    constructor(ten, tuoi, diaChi, ngheNghiep, mucLuong) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diaChi = diaChi;
        this.ngheNghiep = ngheNghiep;
        this.mucLuong = mucLuong;
    }
}

// Xây dựng mảng 3 đối tượng từ lớp trên
let nguoi1 = new Nguoi("Nguyen Van A", 30, "Hà Nội", "Kỹ sư", 1000);
let nguoi2 = new Nguoi("Tran Thi B", 25, "Hà Nội", "Bác sĩ", 2000);
let nguoi3 = new Nguoi("Le Van C", 35, "TP.HCM", "Giáo viên", 1500);

let mangNguoi = [nguoi1, nguoi2, nguoi3];

// In vào console thông tin những đối tượng có địa chỉ là ‘Hà Nội’
mangNguoi.forEach(nguoi => {
    if (nguoi.diaChi === "Hà Nội") {
        console.log(nguoi);
    }
});

// Viết và gọi hàm tính tổng mức lương của 3 đối tượng được tạo ra từ lớp trên.
function tinhTongLuong(mangNguoi) {
    let tongLuong = 0;
    mangNguoi.forEach(nguoi => {
        tongLuong += nguoi.mucLuong;
    });
    return tongLuong;
}

console.log("Tổng mức lương: ", tinhTongLuong(mangNguoi));





// Nhập số từ bàn phím
let so = prompt("Nhập một số:");

// Kiểm tra xem giá trị nhập vào có phải là số không
if (isNaN(so)) {
    console.log("Giá trị nhập vào không phải là số");
} else {
    so = Number(so);
    console.log(`Các số nguyên tố từ 1 đến ${so} là:`);
    for (let i = 2; i <= so; i++) {
        if (laSoNguyenTo(i)) {
            console.log(i);
        }
    }
}
// Hàm kiểm tra dữ liệu nhập vào
function validate(ten, tuoi, email, soDienThoai) {
    // Kiểm tra tên
    if (!ten) {
        console.log("Lỗi: Tên không được bỏ trống");
    }

    // Kiểm tra tuổi
    if (isNaN(tuoi)) {
        console.log("Lỗi: Tuổi nhập vào phải là số");
    }

    // Kiểm tra email
    if (!email.includes('@') || !email.includes('.')) {
        console.log("Lỗi: Email phải có kí tự . và @");
    }

    // Kiểm tra số điện thoại
    if (soDienThoai[0] !== '0') {
        console.log("Lỗi: Số điện thoại số bắt đầu phải là 0");
    }
}

// Nhập dữ liệu từ bàn phím
let ten = prompt("Nhập tên:");
let tuoi = prompt("Nhập tuổi:");
let email = prompt("Nhập email:");
let soDienThoai = prompt("Nhập số điện thoại:");

// Tiến hành kiểm tra dữ liệu
validate(ten, tuoi, email, soDienThoai);
