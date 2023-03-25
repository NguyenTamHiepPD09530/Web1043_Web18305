class Sinhvien {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
    
    getFullName() {
      return this.first_name + " " + this.last_name;
    }
    
    getAge() {
      var day = (Date.now() - this.dob.getTime()) / (1000 * 60 * 60 * 24);
      return day;
    }
  }
  
  var listsv = [
    new Sinhvien(1, "Nguyen", "Truc", 01, "trucnt@gmail.com", "0943932156", "2005-11-29"),
    new Sinhvien(2, "Nguyen", "Tien", 02, "tiennt@gmail.com", "0562456845", "2003-07-20"),
    new Sinhvien(3, "Le", "Loc", 01, "loclv@gmail.com", "0576223655", "1999-03-06"),
    new Sinhvien(4, "Hoang", "Hai", 01, "hai@gmail.com", "0586548965", "2000-04-05"),
    new Sinhvien(5, "Tran", "Binh", 01, "binh@gmail.com", "0594789654", "2001-05-15"),
  ];
  
  console.log(listsv[0].getAge());
  listsv.sort((a, b) => {
    const ageA = a.getAge();
    const ageB = b.getAge();
    if (ageA < ageB) {
      return -1;
    }
    if (ageA > ageB) {
      return 1;
    }
  
    return 0;
  });
  console.log(listsv);
  console.log(screen.width);
  console.log(screen.height);