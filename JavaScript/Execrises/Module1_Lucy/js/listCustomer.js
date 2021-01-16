// Declare the function constructor
// function AddCus (name, date, dept, cmnd, numPhone, sale, email, objCusType, address, objCusServices, objRoomTypes) {
//     this.name = name;
//     this.date = date;
//     this.dept = dept || "???? gioi tinh";
//     this.cmnd = cmnd;
//     this.numPhone = numPhone || "??? chua nhap";
//     this.sale = sale;
//     this.email = email;
//     this.cusTypes = objCusType;
//     this.address = address;
//     this.cusServices = objCusServices;
//     this.roomTypes = objRoomTypes;
// }

// var AddCus = {
//     name : "" ,
//     date : "",
//     dept :"???? gioi tinh",
//     cmnd : "",
//     numPhone : "??? chua nhap",
//     sale : "",
//     email : "",
//     cusTypes : objCusTypes,
//     address: "",
//     cusServices : objCusServices,
//     roomTypes : objRoomTypes,
// };
// const CusEmpty = AddCus;
var AddCus0 = {};
AddCus0.name = "Nguyen Van A";
AddCus0.date = "2018-07-22";
AddCus0.dept = "Male";
AddCus0.cmnd = "2341086932";
AddCus0.numPhone = "09752345678";
AddCus0.numPeople = 1;
// AddCus0.sale = 25;
AddCus0.days = 2;
AddCus0.email = "a@gmail.com";
AddCus0.cusTypes = {value: 0, name: "Diamond"};
AddCus0.address = 1;
AddCus0.cusServices = {value: 1, name: "House"};
AddCus0.roomTypes = {value: 1, name: "Business"};
listCus.addCus(AddCus0);