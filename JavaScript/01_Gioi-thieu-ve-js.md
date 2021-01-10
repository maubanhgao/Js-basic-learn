# Giới thiệu về Javascript

[TOC]

### 1. JavaScript là gì?

Có khi nào các em thắc mắc khi mình gõ một đoạn comment lên bài post của bạn mình rồi bấm enter thì chuyện gì xảy ra không? và làm sao mình gửi những những đoạn text đó lên để server facebook có thể lưu lại và lần sau mình vào thì mình vẫn thấy đoạn comment của mình. Vậy làm cách nào từ giao diện mình gửi đoạn văn bản lên server được. Thì đó chính là công dụng đầu tiên của JavaScript. Mình dùng nó như một cầu nối ở giữa giao diện(HTML) và Server (xử lý comment). Nhờ có Javascript mà mình có thể gửi các dữ liệu ở web lên cho server. Tiếp đến các chú ý những trang web có những animation (hiệu ứng) như bay, nhảy các kiểu thì mình dùng Javascript để làm các hiệu ứng đó. Hoặc chúng ta sử dụng Javascript để kiểm tra dữ liệu người dùng nhập vào có đúng yêu cầu hay không.Ví dụ như yêu cầu người dùng nhập vào phải là số trong ô số điện thoại hoặc yêu cầu nhập đúng định dạng email bắt buộc phải có dấu @.

Javascript là ngôn ngữ kịch bản nó được chạy trong trình duyệt của người dùng. Sử dụng Javascript để thao tác với các thành phần của web như text, button, image , etc.

### 2. Cài đặt môi trường cho JavaScript

Để học và viết được ngôn ngữ Javascript chúng ta cần cài đặt trình duyệt. Có thể dùng Internet Exploer, Chrome, FireFox, Coccoc. Đây là những trình duyệt giúp chúng ta thấy được kết quả khi chạy các dòng code javascript. Anh thì hay dùng Chrome và FireFox để chạy Javascript

Ngoài ra chúng ta có thể lập trình Javascript online. Các tool như plnkr.co, jsfiddle.net hoặc jsbin.com đều có thể sử dụng được.

### 3. Thẻ JavaScript

Tất cả code JS được viết ở trong thẻ < script > nếu ta đặt những đoạn code của mình trong file html.

Cú pháp như sau

```html
<script>
            
    //Viết code javascript tại đây
            
</script>
```

Nếu như ta không đặt file JS ở trong file html thì ta hoàn toàn có thể tạo một file JS ở ngoài sau đó trong file html chúng ta link nó vào như sau.

Ví dụ file main.js

```html
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>JavaScript Demo</title>   
    <script src="/main.js"/>  
</head>
<body>
</body>
```

### 4. Đặt file JS ở đâu trong html

Chúng ta **thường đặt file JS ở cuối cùng của thẻ body.** Vì khi trang web được load lên nó sẽ load từ trên xuống dưới. Trong trường hợp ta đặt file JS ở trên thì sẽ gây ra việc trình duyệt sẽ phải đọc file js sau đó mới render ra giao diện nó gây ra tình trạng trang web load lên chậm. Nếu đặt ở cuối thì các thành phần trang web được load lên trước, sau đó mới load JS như vậy người dùng sẽ thấy nhanh hơn.

```html
<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>JavaScript Demo</title>
   
</head>
<body>
    <h1> JavaScript Tutorials</h1>
    <p>This is JavaScript sample.</p>
   
   
    <script src="/main.js"></<script>
</body>
</html>
```

### 5. Hiển thị Popup Message

**avascript xây dựng sẵn một số function (chức năng) có sẵn. Trong bài hôm nay chúng ta sẽ học một chức năng là hiển thị popup.**

- Ví dụ sử dụng **Alert Box** để hiển thị popup alert

```html
<script>
	
	alert("This is alert box!");  // display string message

</script>
```

- Ví dụ như **Comfirm Box**. Popup hiển thị 2 nút Ok và Cancel

```html
<script>

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}
</script>
```

- Ví dụ **Promt Box**, yêu cầu người dùng nhận vào dữ liệu

```html
<script>

var tenure = prompt("Please enter preferred tenure in years", "15");
    
if (tenure != null) {
    alert("You have entered " + tenure + " years" );
}
</script>
```

