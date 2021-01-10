# Sử dụng Scope trong Javascript

[TOC]

### 1. Scope

Trong Javascript chúng ta định nghĩa Scope nghĩa là **phạm vi hoạt động của biến, đối tượng và function**. Khi nào chúng tồn tại và khi nào có thể gọi được chúng.

**Có 2 loại scope trong javascript là Global (phạm vi toàn cục) và Local (phạm phi nhất định)**

### 2. Global scope

Các biến khai báo ngoài các function được gọi là global. Biến này được dùng chung cho các funcation, các function có thể thấy được biến này và thay đổi giá trị của biến này

**Ví dụ**

```js
<script>

    var userName = "Bill";

    function modifyUserName() {
            userName = "Steve";
        };

    function showUserName() {
            alert(userName);
        };

    alert(userName); // display Bill
    
    modifyUserName();
    showUserName();// display Steve

</script>
```

Trong ví dụ trên **biến userName là global** nên function modifyUserName và showUserName có thể thấy được và sử dụng được

***Các biến khai báo trong function nhưng <u>không có từ khoá var</u>, thì cũng được xem là biến <u>có scope global.***</u>

```js
<script>

    function createUserName() {
        userName = "Bill";
    }

    function modifyUserName() {
        if(userName)
            userName = "Steve";
    };

    function showUserName() {
        alert(userName);  
    }
    
    createUserName();
    showUserName(); // Bill 

    modifyUserName();
    showUserName(); // Steve 

    
</script>
```

### 3. Local scope

Các biến được **khai báo bên trong function và có từ khoá var được gọi là local.** Biến local chỉ được sử dụng bên trong function. Các function khác bên ngoài không thể sử dụng được biến local này

```js
<script>
    
    function createUserName() {
        var userName = "Bill";
    }

    function showUserName() {
        alert(userName);
    }

    createUserName();
    showUserName(); // throws error: userName is not defined

</script>
```

Trong ví dụ trên biến userName chỉ được sử dụng trong function createUserName mà thôi, các function khác không thấy được biến này.

### 4. Hoisting biến

Hoising là một khái niệm được đưa vào Javascript, nó khác với các ngôn ngữ lập trình khác. **Ý chính của hoisting là các biến và function có thể được dùng trước khi mình khai báo.**

Thông thường chúng ta code như sau.

```js
var x;

x = 1;

alert('x = ' + x); // display x = 1

```

Chúng ta khai báo var x, sau đó chúng ta gán giá trị x = 1, cuối cùng là thực hiện function alert.

**Hoisting cho phép chúng ta sử dụng biến x trước khi khai báo** như sau

```js
x = 1;

alert('x = ' + x); // display x = 1

var x;
```

**Như vậy ta thấy khai báo var x ở dòng cuối cùng. Khi Javascript biên dịch nó sẽ tự động đưa dòng var x lên phía trên cùng của file javascript. Như vậy sẽ không có lỗi xảy ra.**

### 5. Hoisting function

**Cũng tương tự như biến chúng ta cũng có thể hoisting cho function. Khi Javascript biên dịch nó sẽ di chuyển định nghĩa function lên phía trên cùng. Như vậy sẽ không có lỗi xảy ra.**

```js
alert(Sum(5, 5)); // 10

function Sum(val1, val2)
{
    return val1 + val2;
}
```

