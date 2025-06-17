var a = prompt("Toán hạng a:")
var b = prompt("Toán hạng b:")
var o = prompt("Toán tử:")

a = Number(a)
b = Number(b)

switch (o) {
    case '+':
        var kq = a + b
        alert("Tổng:" + kq);
        break;

    case '-':
        var kq = a - b
        alert("Hiệu:" + kq);
        break;

    case '*':
        var kq = a * b;
        alert("tích:" + kq);
        break;

    case '/':
        if (b != 0) {
           var kq = a / b;
            alert("Thương: " + kq);
        } else {
            alert("Không thể chia cho 0");
        }
        break;
    default:
        alert(o + " không phải là toán tử");
        break;



}