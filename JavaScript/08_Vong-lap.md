# Sử dụng vòng lặp trong Javascript

[TOC]

### 1. Vòng lặp for là gì

- Có điều kiện có số vòng lặp xác định

- Cú pháp

  ```js
  for(initializer; condition; iteration)
  {
      // Code to be executed
  }
  ```

- Ví dụ

  ```js
  for (var i = 0; i < 5; i++)
  {
      console.log(i);
  }
  ```

  Trong vòng lặp loop 3 thành phần có thể không cần thiết khai báo, mình chỉ cần khai báo giá trị initializer trước khi vòng lặp chạy vẫn được. Nhưng cách này khuyên không nên dùng vì gây khó hiểu

  ```js
  var arr = [10, 11, 12, 13, 14];
  var i = 0;
  
  for (; ;) {
      
      if (i >= 5)
      break;
  
      console.log(arr[i]);
          
      i++;
  }
  ```

### 2. Vòng lặp While

- Số vòng lặp không xác định trước, chỉ cần thoải điều kiện

- Cú pháp

  ```js
  while(condition expression)
  {
      //code ở đây
  }
  ```

- Ví dụ

  ```js
  var i =0;
  
  while(i < 5)
  {
      console.log(i);
      i++;
  }
  ```

### 3. Vòng lặp do-while

- Giống như While nhưng vòng lặp đầu tiên luôn được run không cần xét thỏa điều kiện

- Cú pháp

  ```js
  do{
      //code to be executed
  }while(condition expression)
  ```

- Ví dụ

  ```js
  var i = 0;
  
  do{
     
       alert(i);
      i++;
  
  } while(i < 5)
  ```

  

