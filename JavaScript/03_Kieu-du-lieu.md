## Kiểu dữ liệu trong js

[TOC]

### 1. Kiểu dữ liệu là gì 

Trong JavaScript ta có **2 loại kiểu dữ liệu là Primitive (String, number, Boolean, Null, và Undefined) và Non Primitive (Object, Date, Array).** 

### 2. Kiểu dữ liệu String

**Kiểu dữ liệu String thường chứa giá trị là chuỗi. Chúng ta có thể sử dụng dấu “ “ hoặc ‘ ‘**

```js
var str1 = "Hello World"; var str2 = 'Hello World'; 
```

String là một kiểu dữ liệu đặc biệt vì nó gồm nhiều **ký tự kết hợp lại** như các em thấy chữ Hello là do các ký tự H , e ,l ,l ,o kết hợp lại với nhau. **Do vậy ta có thể dễ dàng lấy từng ký tự trong chuỗi Hello như sau**

```js
var str = 'Hello World';

str[0] // H
str[1] // e
str[2] // l
str[3] // l
str[4] // o
```

- Nối 2 chuỗi String lại với nhau

Chúng ta sử dụng dấu + để nối các chuỗi lại với nhau.

```js
var str = 'Hello ' + "World " + 'from ' + 'TutorialsTeacher '; 
```

Sử dụng dấu ký tự đặc biệt trong chuỗi, như các em thấy **dấu “ và dấu ‘ là những ký tự đặc biệt.** Nhưng nếu ta muốn sử dụng các ký tự đặc biệt trong chuỗi thì ta **dùng ký tự \ trước các ký tự đặt biệt**

```js
var str1 = "This is \"simple\" string";
var str2 = 'This is \'simple\' string'; 
```

### 3. Kiểu dữ liệu Number

Kiểu dữ liệu Number sẽ **chứa đựng các số nguyên, số thập phân, kiểu hex hoặc octal**

```js
var int = 100;
var float = 100.5;
var hex = 0xfff;
var exponential = 2.56e3;
var octal = 030
```

### 4. Kiểu dữ liệu Boolean

**Kiểu Boolean chỉ chứa đúng 2 giá trị là đúng và sai (true hoặc false)**

```js
var YES = true; var NO = false; 
```

```js
alert(1 > 2); // false 
alert(10< 9); // false 
alert(5 == 5); // true 
```

### 5. Kiểu dữ liệu NULL

Chúng ta sử dụng **NULL để chỉ ra rằng biến này không chứa bất kỳ giá trị gì.** Nó sẽ được gán giá trị sau. **NULL có nghĩa là giá trị chưa được tạo ra cho biến.**

```js
var myVar = null; alert(myVar); // null  
```

### 6. Kiểu dữ liệu Undefined

**Biến có giá trị undefined có nghĩa là không có giá trị nào được gán cho nó trước khi sử dụng.**

```js
var myVar; alert(myVar);// undefined 
```

### 7. Kiểu dữ liệu Object

**Kiểu dữ liệu Object (đối tượng)** cũng giống như các kiểu khác của Javascript nhưng khác nhau ở chỗ Object này **sẽ chứa đựng nhiều giá trị và phương thức**

- Cách 1 : Tạo Object Literal

  **Chúng ta sử dụng dấu { } để tạo một đối tượng ( Object ), các thuộc tính và hành động của đối tượng đặt trong dấu { }**

  **Cú pháp như sau**

  ```js
  var <object-name> = { key1: value1, key2: value2,... keyN: valueN};
  ```

  **Ví dụ mình tạo đối tượng person như sau**

  ```js
  var emptyObject = {}; // object with no properties or methods
  
  var person = { firstName: "John" }; // object with single property
  
  // object with single method
  var message = { 
                  showMessage: function (val) { 
                              alert(val); 
                  } 
              }; 
  
  // object with properties & method
  var person = { 
                  firstName: "James", 
                  lastName: "Bond", 
                  age: 15, 
                  getFullName: function () { 
                          return this.firstName + ' ' + this.lastName 
                  }
              }
  ```

- Cách 2 : Tạo object bằng từ khoá new

  ```js
  var <object-name> = new Object();
  ```

  **Ví dụ mình tạo đối tượng person như sau**

  ```js
  var person = new Object();
  
  // Attach properties and methods to person object     
  person.firstName = "James";
  person["lastName"] = "Bond"; 
  person.age = 25;
  person.getFullName = function () {
          return this.firstName + ' ' + this.lastName;
      };
  
  // access properties & methods 
  person.firstName; // James
  person.lastName; // Bond
  person.getFullName(); // James Bond
  ```

  <u>**JavaScript sẽ trả về undefined if như ta truy cập các biến và phương thức nếu nó không tồn tại.**</u>

### 8. Kiểu dữ liệu Date

Javascript cung cấp cho chúng ta kiểu dữ liệu **Date để xử lý các dữ liệu liên quan đến ngày tháng năm, giờ phút giây.**

- Ví dụ như lấy ngày giờ hiện tại

  ```js
  Date(); //current date
  
  //or
  
  var currentDate = new Date(); //current date
  
  ```

- Nếu chúng ta muốn làm nhiều tính toán hơn là sử dụng ngày hiện tại. Ta có thể tạo ra đối tượng ngày với các tham số ta muốn

  ```js
  var dt = new Date();
  
  var dt = new Date(milliseconds);
  
  var dt = new Date('date string');
  
  var dt = new Date(year, month[, date, hour, minute, second, millisecond]);
  
  var date1 = new Date("February 2015-3");
  
  var date2 = new Date("February-2015-3");
  
  var date3 = new Date("February-2015-3");
  
  var date4 = new Date("February,2015-3");
  
  var date5 = new Date("February,2015,3");
  
  var date6 = new Date("February$2015$3");
  
  var date7 = new Date("3-2-2015"); // MM-dd-YYYY
  
  var date8 = new Date("3/2/2015"); // MM-dd-YYYY
  ```

  