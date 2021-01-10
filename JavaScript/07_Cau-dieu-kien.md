# Sử dụng câu điều kiện trong Javascript

[TOC]

### 1. Câu điều kiện là gì

Javascript cung cấp cho chúng ta các câu điều kiện để quản lý luồng đi của chương trình. Chúng ta thường sử dụng các câu điều kiện if else và switch case trong lập trình web.

### 2. Câu điều kiện If

**Cú pháp**

```js
if (điều kiện) {
   nếu đúng thực hiện các dòng code trong này
 }
```

**Ví dụ**

```js
if( 1 > 0)
{
    alert("1 is greater than 0");
}

if( 1 < 0)
{
    alert("1 is less than 0");
}
```

### 3. Câu điều kiện Else

**Cú pháp**

```js
if (điều kiện) {
   nếu đúng thực hiện các dòng code trong này
 } else {
   thực hiện code trong else
}
```

**Ví dụ**

```js
var mySal = 500;
var yourSal = 1000;

if( mySal > yourSal)
{
    alert("My Salary is greater than your salary");
}
else
{
    alert("My Salary is less than or equal to your salary");
}
```

### 4. Câu điều kiện Else If

**Cú pháp**

```js
if(condition expression)
{
    //Execute this code block
}
else if(condition expression){ 
    //Execute this code block
}
```

**Ví dụ**

```js
var mySal = 500;
var yourSal = 1000;

if( mySal > yourSal)
{
    alert("My Salary is greater than your salary");
}
else if(mySal < yourSal)
{
    alert("My Salary is less than your salary");
}
```

### 5. Mệnh đề Switch

**Cú pháp**

```js
switch(expression or literal value){
    case 1:
        //code to be executed
      break;
    case 2:
        //code to be executed
        break;
    case n:
        //code to be executed
        break;
    default:
        //default code to be executed 
        //if none of the above case executed
}
```

**Ví dụ**

```js
var a = 3;

switch (a) {
    case 1:
        alert('case 1 executed');
        break;
    case 2:
        alert("case 2 executed");
        break;
   case 3:
        alert("case 3 executed");
        break;
    case 4:
        alert("case 4 executed");
        break;
    default:
        alert("default case executed");
}
```

