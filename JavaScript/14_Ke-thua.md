# Sử dụng kế thừa trong Javascript

[TOC]

### 1. Kế thừa?

**Một đối tượng kế thừa một đối tượng khác thì nó sẽ có thuộc tính và phương thức có sẵn của đối tượng mà nó kế thừa.**

**Trong Javascript, kế thừa được hỗ trợ khi ta dùng Prototype.**

Ví dụ **Student kế thừa từ đối tượng Person**

```js
function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
};

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
```

Ở ví dụ trên ta định nghĩa lớp **Person có 2 thuộc tính là firstNam và lastName.** Đồng thời chúng ta sử dụng prototype **tạo thêm phương thức getFullName cho đối tượng Person**

Bây giờ chúng ta sẽ tạo **đối tượng Student kế thừa đối tượng Person và mặc định nó sẽ kế thừa 2 thuộc tính** **là firstName, lastName và phương thức getFullName của Person**

```js
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

Student.prototype = new Person();
Student.prototype.constructor = Student

```

**Chúng ta sử dụng Student.prototype để tạo ra đối tượng Person**

### 2. Ví dụ hoàn chỉnh

```js
function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true
```

