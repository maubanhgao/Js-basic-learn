// var customerTypes = [{'diamond' : 'Diamond'}, {'plaimium': 'Plaimium'}, {'gold': 'Gold'}, {'silver': 'Silver'}, {'menber': 'Menber'}];
var customerTypes = ['Diamond', 'Plaimium' ,'Gold' , 'Silver',  'Menber'];
var cusServices = ['Villa', 'House', 'Room'];
var roomTypes = ['Vip', 'Business', 'Normal'];
// var addresses = {
//     add: [
//         {
//             value: 'danang',
//             name: 'Đà Nẵng'
//         },
//         {
//             value: 'hue',
//             name: 'Huế'
//         },
//         {
//             value: 'quangnam',
//             name: 'Quảng Nam'
//         }
//     ]
// };
var addressArr = ['Đà Nẵng', 'Huế', 'Quảng Nam'];
const lCus = {
    lists: [],
    addCus: function (cus) {
        this.lists.push(cus);
    }
};
const listCus = Object.create(lCus);
// const cartPrototype = {
//     products:[],
//     addProduct: function(product){
//         this.products.push(product);
//     },
//     getTotalPrice: function(){}
// }

// const cart1 = Object.create(cartPrototype);
// cart1.addProduct({name: 'orange', price: 1.25});
// cart1.addProduct({name: 'lemon', price: 1.75});