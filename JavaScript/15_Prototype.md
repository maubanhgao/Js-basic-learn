# Sử dụng Prototype trong Javascript

[TOC]

**Prototype là gì?**

Javascript là ngôn ngữ động chúng ta có thể t**hêm thuộc tính mới với Object bất cứ lúc nào.** Chúng ta hãy xem ví dụ sau

```js
function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // undefined

```

Ta có một đối tượng là Student có 2 thuộc tính là name và gender. Nhưng các em thấy ở **đối tượng studObj1 có thêm 1 thuộc tính mới là age.** Thuộc tính này **ban đầu không có <u>trong đối tượng Student</u>.**

```js
var studObj1 = new Student();
studObj1.age = 15;
```

**Tuy nhiên đối tượng studObj2 không có thuộc tính age, chính vì vậy khi get giá trị từ biến age là báo lỗi.**

**Như vậy khi muốn thêm một thuộc tính mới và đối tượng có sẵn ta dùng Prototype.**

Protype được cài đặt mặt định trong tất cả function và đối tượng của Javascript. Được sử dụng để ta có thể lấy thêm và chỉnh sửa các giá trị trong đối tượng và function.

<u>***Prototype gán giá trị***</u>

**Ví dụ 1 biến age chỉ có ở đối tượng studObj1,** <u>***có cách nào để nó có thể có cho tất cả các đối tượng khác được không.***</u> Trong trường hợp này là studObj2. Để làm được việc này ta khai báo như sau

```js
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15

```

Như các bạn thấy chúng ta có dòng Student.prototype.age = 15; để thêm giá trị age cho tất cả các đối tượng là Student. Bây giờ studObj2 không bị lỗi giống như ví dụ 1.