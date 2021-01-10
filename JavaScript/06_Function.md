# Sử dụng Function trong Javascript

[TOC]

### 1. Function là gì

Trong Javascript một function cho phép chúng ta đặt nhiều dòng code ở trong nó. Chúng ta phải đặt tên cho một function và sử dụng nó nhiều lần nếu mình cần.

Để định nghĩa một function trong Javascript chúng ta dùng từ khoá function

- Cú pháp

  ```js
  //defining a function
  function <function-name>()
  {
      // code to be executed
  };
  
  //calling a function
  <function-name>();
  ```

- Ví dụ

  ```js
  function ShowMessage() {
      alert("Hello World!");
  }
  
  ShowMessage(); // chúng ta gọi function
  ```

### 2. Function với tham số

```js
function ShowMessage(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

ShowMessage("Steve", "Jobs");
ShowMessage("Bill", "Gates");
```

### 3. Trả về kết quả trong function

```js
function Sum(val1, val2) {
    return val1 + val2;
};

var result = Sum(10,20); // returns 30
```

