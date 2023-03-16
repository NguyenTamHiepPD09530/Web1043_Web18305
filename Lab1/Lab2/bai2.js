let a = prompt("Nhap canh a:");
let b = prompt("Nhap canh b:");
let c = prompt("Nhap canh c:");

if (a == b || b == c || c == a){
    alert("Tam giac can");
}else if (a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c){
    alert("la tam giac vuong");
}else{
    alert("Tam giac thuong");
}
