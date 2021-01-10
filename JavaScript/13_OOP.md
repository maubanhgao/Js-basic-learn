# Lập trình hướng đối tượng trong Javascript

[TOC]

### 1. OPP ?

**Object Oriented Programming – OOP ** là một kỹ thuật lập trình cho phép lập trình viên tạo ra các ***đối tượng\*** trong code trừu tượng hóa các ***đối tượng thực tế trong cuộc sống\***.

Một đối tượng bao gồm 2 thông tin: **thuộc tính** và **phương thức**.

###  2. Object?

**Object là những đối tượng mà ta ánh xạ ở ngoài thực tế.**  có thể là con người, điện thoại, máy tính, yasuo, leesin ... và điểm chung là đều gồm 2 thành phần chính là:

- **Thuộc tính (Attribute):** là những thông tin, đặc điểm của đối tượng.

- **Phương thức (Method):** là những hành động mà đối tượng có thể thực hiện.

  Mình lấy một ví dụ là máy vi tính cho các bạn dễ hiểu nha: 

  - Máy tính sẽ có các **thuộc tính** như: màu sắc, kích thước, bộ nhớ, ...

  - Và các **phương thức** như: quét virus, tắt máy, khởi động máy, mở LoL ...

    => Và **đối tượng (object)** có thể là các dòng máy như Asus, Acer, Lenovo, Thinkpad, ... đều mang đặc tính của lớp máy vi tính.

    **Có 3 cách để tạo đối tượng trong javascript**

    1. **Tạo đối tượng bằng object literal**

       ***Cú pháp***

       ```js
       object = {property1:value1,property2:value2.....propertyN:valueN}  
       
       ```

       ***Ví dụ***

       ```js
       <script>  
           emp={id:102,name:"Shyam Kumar",salary:40000}  
           document.write(emp.id+" "+emp.name+" "+emp.salary);  
           </script> 
       ```

    2. **Tạo đối tượng bằng new Object**

       ***Cú pháp***

       ```js
       var objectname = new Object(); 
       ```

       ***Ví dụ***

       ```js
       <script>  
       var emp=new Object();  
       emp.id=101;  
       emp.name="Ravi Malik";  
       emp.salary=50000;  
       document.write(emp.id+" "+emp.name+" "+emp.salary);  
       </script>
       ```

    3. **Tạo đối tượng bằng hàm khởi tạo constructor của Object**

       **Ví dụ**

       ```js
       <script>  
       
       function emp(id,name,salary){  
       this.id = id;  
       this.name = name;  
       this.salary = salary;  
       
       }  
       emp = new emp(103,"Vimal Jaiswal",30000);  
       
       </script>  
       ```

       Chúng ta sử dụng **từ khoá this để tham chiếu đến đối tượng hiện tại** trong trường hợp này this chính là emp.

       

### 3. Định nghĩa phương thức

- **Phương thức (Method):** là những hành động mà đối tượng có thể thực hiện.

  ```js
  <script>  
          function emp(id,name,salary){  
              this.id=id;  
              this.name=name;  
              this.salary=salary;  
        
              this.changeSalary=changeSalary;  
      
              function changeSalary(otherSalary){  
                  this.salary=otherSalary;  
              }  
      }  
      e=new emp(103,"Sonoo Jaiswal",30000);  
      document.write(e.id+" "+e.name+" "+e.salary);  
      e.changeSalary(45000);  
      document.write("<br>"+e.id+" "+e.name+" "+e.salary);  
   </script>  
  ```

  **function changeSalary() chính là phương thứ**c trong đối tượng employ. ***Khai báo phương thức của đối tượng chúng ta dùng từ khoá function.***

### 4. Constructor

**Javascript constructor là một phương thức đặc biệt chúng ta sử dụng nó để khởi tạo các giá trị cho đối tượng**

```js
  <script>  
    class Employee {  
      constructor() {  
        this.id=101;  
        this.name = "Martin Roy";  
      }   
    }  
    var emp = new Employee();  
    document.writeln(emp.id+" "+emp.name);  
  </script>  
```

Chúng ta tạo constructor của class Employee với từ khoá là constructor. Trong method constructor ta khởi tạo giá trị ban đầu cho object Employee là id = 101 và name là Martin. Như vậy ta sử dụng constructor để khởi tạo giá trị ban đầu cho đối tượng.

Khi ta gọi var emp = new Employee() thì 2 giá trị id và name đã có sẵn giá trị là 101 và Martin