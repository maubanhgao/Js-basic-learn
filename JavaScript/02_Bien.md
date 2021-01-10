## Khai báo biến trong JS

[TOC]

### 1. Biến là gì

Chúng ta sử dụng biến để lưu lại các giá trị. Giá trị này có thể thay đổi bất cứ lúc nào. Trong Javascript chúng ta sử dung từ khoá var để khai báo một biến. Tên biến phải là duy nhất và không được đặt trùng tên với các biến khác. Chúng ta sử dụng dấu = để gán giá trị cho biến.

### 2. Khai báo biến

- **Cú pháp khai báo biến**

  ```html
  var <variable-name>;
  
  var <variable-name> = <value>;
  
  ```

- **Ví dụ khai báo biến và giá trị mà nó sẽ chứa**

  ```js
  var one = 1; // variable stores numeric value 
  // one: 1
  var two = 'two';  // variable stores string value 
  // two: "two"
  var three; 
  // undefined
  ```

- **Chúng ta có thể khai báo nhiều biến trên cùng 1 dòng**

  ```js
  var one = 1, two = 'two', three; 
  ```

- **Chúng ta có thể khai báo biến không cần dùng từ khoá var vẫn được.** (Không nên dùng)

  ```js
  one = 1;
  
  two = 'two';
  ```

### 3. Đặt tên cho biến

Tên của biến là một phần rất quan trọng trong sử dụng biến. Đặt tên biến phải bắt đầu bằng ký tự (a-z hoặc A-Z), hoặc dấu _ hoặc dấu $. Tiếp sau đó có thể là số (0-9). Tên biến trong JS phân biệt chữ hoa và chữ thường chính vì vậy mà tên biến là x thì sẽ khác với X

```js
var x = 10;  
var $value="sonoo";
```

