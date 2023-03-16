var arr = ["Tue","Thu","Sat","Nice"];
arr.push("Mon","We","Fri","Sun");
arr.splice(3, 1, "Wed");
arr.sort();
document.write(arr);
