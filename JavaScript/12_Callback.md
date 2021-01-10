# Sử dụng Callback trong Javascript

[TOC]

### 1. Callback là gì?

**<u>Khái niệm</u> callback có nghĩa là ta truyền một function như một tham số đến một function khác.**

Thông thường chúng ta thấy khi khai báo hàm có tham số ví dụ

```js
function getData(x, y) {
    
    // code logic tại đây
}
```

- Thì tham số truyền vào trong <u>hàm getData là kiểu dữ liệu.</u>
- **Còn đối với Callback là ta truyền vào một function chứ không phải kiểu dữ liệu như ví dụ dưới đây**

### 2. Ví dụ Callback?

```js
function getData(x, y, callback){  
    document.write(" The multiplication of the numbers " + x + " and " + y + " is: " + (x*y) + "<br><br>" );  
    callback();  
}  

function showData(){  
document.write(' This is the showData() method execute after the completion of getData() method.');  
}  
getData(20, 30, showData); 
```

- Ở ví dụ trên ta có 2 function:

- Function đầu tiên là getData với 3 tham số là x,y và callback (callback này là ta truyền vào đây một function như một tham số thứ 3 trong ví dụ trên tham số thứ 3 là function tên showData)

- Function thứ 2 có tên là showData function này được truyền vào như 1 tham số

- Khi chương trình chạy đầu tiên nó sẽ gọi function getData(x,y,callback) lúc này nó sẽ in ra màn hình “The multiplication of the numbers”. Sau khi in ra màn hình xong thì lúc này nó mới gọi hàm showData lúc này nó sẽ in tiếp ra màn hình là “This is the showData() method execute after the completion of getData() method.”

  **Như vậy callback mình sử dụng như làm tuần tự các công việc một cách đồng bộ. Có nghĩa là khi làm xong việc thứ nhất thì chạy tiếp các công việc thứ 2 cho mình.**

### 3. Ví dụ 2 Callback?

```js
<html>  
<head>  

</head>  
<body>  
<h1> Hello World :) :) </h1>  
<h2> This is the javaTpoint.com </h2>  
<script>  
function showData(name, amt) {  
alert(' Hello ' + name + '\n Your entered amount is ' + amt);  
}  

function getData(callback) {  
var name = prompt(" Welcome to the javaTpoint.com \n What is your name?");  
var amt = prompt(" Enter some amount...");  
callback(name, amt);  
}  

getData(showData);  
</script>  
</body>  

    </html>  
```

**Tóm lại chúng ta sử dụng callback khi chúng ta muốn các công việc được xử lý đồng bộ theo <u>trình tự nhất định</u>.**