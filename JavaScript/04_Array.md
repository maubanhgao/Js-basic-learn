# Sử dụng Array trong Javascript

[TOC]

### 1. Mảng là gì?

Array là một loại biến đặc biệt nó có thể chứa đựng nhiều giá trị trong đó. Mỗi giá trị sẽ tương ứng với một vị trí trong Array, mình gọi đó là Index. Trong Array, Index được đếm bắt đầu từ 0.

### 2. Khai báo Mảng

- Cách 1 : Chúng ta khai báo Array như sau

  **Cú pháp**

  ```js
  var <array-name> = [element0, element1, element2,... elementN];
  ```

  **Ví dụ ta định nghĩa và khởi tạo mảng như sau**

  ```js
  var stringArray = ["one", "two", "three"];
  
  var numericArray = [1, 2, 3, 4];
  
  var decimalArray = [1.1, 1.2, 1.3];
  
  var booleanArray = [true, false, false, true];
  
  var mixedArray = [1, "two", "three", 4];
  ```

- Cách 2 : chúng ta sử dụng new đối tượng Array

  **Cú pháp**

  ```js
  var arrayName = new Array();
  
  var arrayName = new Array(Number length);
  
  var arrayName = new Array(element1, element2, element3,... elementN);
  
  ```

  **Ví dụ**

  ```js
  var stringArray = new Array();
  stringArray[0] = "one";
  stringArray[1] = "two";
  stringArray[2] = "three";
  stringArray[3] = "four";
  
  var numericArray = new Array(3);
  numericArray[0] = 1;
  numericArray[1] = 2;
  numericArray[2] = 3;
  
  var mixedArray = new Array(1, "two", 3, "four");
  
  ```

  

### 3. Lấy các phần tử trong Mảng

Chúng ta sử dụng Index (vị trí) của các đối tượng trong mảng để lấy ra giá trị của nó. Hãy luôn nhớ rằng Mảng luôn bắt đầu từ vị trị 0 chứ không phải là 1. **<u>Khá giống với String</u>**

```js
var stringArray = new Array("one", "two", "three", "four");

stringArray[0]; // returns "one"
stringArray[1]; // returns "two"
stringArray[2]; // returns "three"
stringArray[3]; // returns "four"

var numericArray = [1, 2, 3, 4];
numericArray[0]; // returns 1
numericArray[1]; // returns 2
numericArray[2]; // returns 3
numericArray[3]; // returns 4
```

### 4. Độ dài của mảng

Để biết được kích thước và độ dài của mảng có bao nhiêu phần tử, ta sử dụng từ khoá **length**

```js
var stringArray = new Array("one", "two", "three", "four");

var len = stringArray.length // kết quả là 4
```

### 5. Các phương thức có sẵn trong Mảng

Array có hỗ trợ sẵn các phương thức để thao tác với các phần tử trong mảng như **concat() , filter(), forEach(), join(), map(), pop(), push(), reduce(), reverse(), slice(), sort(), toString(), unship()** để thao tác với các phần tử trong mảng. Các phương thức thường sử dụng phổ biến nhất là

- pop xoá 1 phần tử khỏi mảng
- push là thêm 1 phần tử vào mảng
- slice cắt mảng

1. **arrayA.concat(arrayB, ....);**

   Phương thức `**concat()**` dùng để kết nối 2 hay nhiều mảng với nhau. Phương thức này không làm thay đổi các mảng đã có mà thay vào đó sẽ trả về 1 mảng mới.

   ```js
   const array1 = ['a', 'b', 'c'];
   const array2 = ['d', 'e', 'f'];
   const array3 = array1.concat(array2);
   
   console.log(array3);
   // expected output: Array ["a", "b", "c", "d", "e", "f"]
   ```

   Phương thức `concat` tạo ra 1 mảng mới bao gồm các phần tử trong đối tượng mà nó được gọi thực thi, và theo thứ tự lần lượt, với mỗi tham số truyền vào là các phần tử của tham số đó (nếu tham số truyền vào là 1 mảng) hoặc là chính tham số đó (nếu tham số truyền vào không phải là 1 mảng). Phương thức này sẽ không thực thi 1 cách đệ quy cho các tham số là mảng lồng nhau.

   Phương thức `concat` không thay đổi `this` (mảng được gọi thực thi) hay bất cứ mảng được truyền vào làm tham số mà thay vào đó nó sẽ trả về 1 bản sao tham chiếu (shallow copy) bao gồm các bản sao của cùng 1 phần tử được kết hợp từ các mảng ban đầu. Các phần từ của mảng ban đầu được sao chép vào mảng mới như sau: 

   - Đối với tham chiếu đối tượng (và không phải đối tượng thực tế): `concat` sao chép tham chiếu đối tượng vào mảng mới. Cả mảng ban đầu và mảng mới đều tham chiếu tới cùng 1 đối tượng. Nghĩa là nếu đối tượng được tham chiếu tới bị thay đổi thì việc thay đổi đó sẽ ảnh hưởng trong cả mảng ban đầu và mảng mới. Điều này bao gồm các phần tử của các mảng làm tham số cũng đều là mảng. 

   - Đối với dữ liệu kiểu chuỗi(strings), số(numbers), và booleans (không phải là các đối tượng kiểu [`String`](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/String), [`Number`](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Number), và [`Boolean`](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Boolean)): `concat` sẽ sao chép giá trị của chuỗi, số vào mảng mới.

     > **Chú ý:** Việc ghép nối các mảng hay giá trị sẽ không "đụng chạm" tới các giá trị ban đầu. Hơn nữa, bất cứ thao tác nào trên mảng trả về (ngoại trừ các thao tác trên các phần từ là tham chiếu đối tượng) sẽ không ảnh hưởng tới các mảng ban đầu, và ngược lại.

   **`**Ví dụ**`**

   **Nối 2 mảng**

   ```js
   var alpha = ['a', 'b', 'c'];
   var numeric = [1, 2, 3];
   
   alpha.concat(numeric);
   // result in ['a', 'b', 'c', 1, 2, 3]
   ```

   **Nối 3 mảng**

   ```js
   var num1 = [1, 2, 3],
       num2 = [4, 5, 6],
       num3 = [7, 8, 9];
   
   var nums = num1.concat(num2, num3);
   
   console.log(nums);
   // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
   ```

   **Nối các giá trị vào 1 mảng**

   ```js
   var alpha = ['a', 'b', 'c'];
   
   var alphaNumeric = alpha.concat(1, [2, 3]);
   
   console.log(alphaNumeric);
   // results in ['a', 'b', 'c', 1, 2, 3]
   ```

   **Nối các mảng lồng nhau**

   Đoạn mã sau đây sẽ nối các mảng lồng nhau và thể hiện sự lưu trữ tham chiếu:

   ```js
   var num1 = [[1]];
   var num2 = [2, [3]];
   
   var nums = num1.concat(num2);
   
   console.log(nums);
   // results in [[1], 2, [3]]
   
   // modify the first element of num1
   num1[0].push(4);
   
   console.log(nums);
   // results in [[1, 4], 2, [3]]
   ```

2. **ArrrayA.filter(xử lý);** 

   Phương thức `**filter()**` dùng để tạo một mảng mới với tất cả các phần tử thỏa điều kiện của một hàm test.

   ```js
   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
   
   const result = words.filter(word => word.length > 6);
   
   console.log(result);
   // expected output: Array ["exuberant", "destruction", "present"]
   ```

   > ```
   > var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
   > ```

   ### Tham số

   - `callback`

     Đây là hàm thử, dùng để kiểm tra từng phần tử của mảng. Trả về `true` để giữ lại phần tử, hoặc `false` để loại nó ra. Nó được gọi với ba tham số:

     `element`

     ​	Phần tử đang được xử lý trong mảng.

     `index`Optional

     ​	Chỉ mục (index) của phần tử đang được xử lý.

     `array`  Optional

     ​	Mảng nguồn mà hàm `filter` đang xử lý.

   - `thisArg` Optional

     Không bắt buộc. Giá trị của `this` bên trong hàm `callback`.
     
     ### **Ví dụ**
     
     **Lọc bỏ các giá trị nhỏ**
     
     Ví dụ sau sẽ dùng `filter()` để tạo một mảng lọc không có các phần tử nào nhỏ hơn 10.
     
     ```js
     function isBigEnough(value) {
       return value >= 10;
     }
     
     var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
     // filtered is [12, 130, 44]
     ```
     
     **Lọc các giá trị không hợp lệ khỏi JSON**
     
     Ví dụ sau sẽ dùng hàm `filter()` để lọc lại các phần tử của JSON chỉ chứa `id` có giá trị số và khác 0.
     
     ```js
     var arr = [
       { id: 15 },
       { id: -1 },
       { id: 0 },
       { id: 3 },
       { id: 12.2 },
       { },
       { id: null },
       { id: NaN },
       { id: 'undefined' }
     ];
     
     var invalidEntries = 0;
     
     function isNumber(obj) {
       return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
     }
     
     function filterByID(item) {
       if (isNumber(item.id) && item.id !== 0) {
         return true;
       }
       invalidEntries++;
       return false;
     }
     
     var arrByID = arr.filter(filterByID);
     
     console.log('Filtered Array\n', arrByID);
     // Filtered Array
     // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
     
     console.log('Number of Invalid Entries = ', invalidEntries);
     // Number of Invalid Entries = 5
     ```
     
     **Tìm kiếm trong mảng**
     
     Ví dụ sau dùng `filter()` để lọc ra phần tử có nội dung thỏa chuỗi tìm kiếm
     
     ```js
     var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
     
     /**
      * Array filters items based on search criteria (query)
      */
     function filterItems(query) {
       return fruits.filter(function(el) {
           return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
       })
     }
     
     console.log(filterItems('ap')); // ['apple', 'grapes']
     console.log(filterItems('an')); // ['banana', 'mango', 'orange']
     ```

3. **ArrayA.forEach(...)**

   Phương thức `**forEach()**` sẽ thực thi một hàm khi duyệt qua từng phần tử của mảng.

   ```js
   const array1 = ['a', 'b', 'c'];
   
   array1.forEach(element => console.log(element));
   
   // expected output: "a"
   // expected output: "b"
   // expected output: "c"
   ```

   ### Giá trị trả về

   Một mảng mới với các phần tử đã thỏa điều kiện của hàm test. Nếu không có phần tử nào thỏa điều kiện, một mảng rỗng sẽ được trả về.

   **VÍ DỤ**

   **Lọc bỏ các giá trị nhỏ**

   Ví dụ sau sẽ dùng `filter()` để tạo một mảng lọc không có các phần tử nào nhỏ hơn 10.

   ```js
   function isBigEnough(value) {
     return value >= 10;
   }
   
   var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
   // filtered is [12, 130, 44]
   ```

   **Lọc các giá trị không hợp lệ Khỏi JSON**

   Ví dụ sau sẽ dùng hàm `filter()` để lọc lại các phần tử của JSON chỉ chứa `id` có giá trị số và khác 0.

   ```js
   var arr = [
     { id: 15 },
     { id: -1 },
     { id: 0 },
     { id: 3 },
     { id: 12.2 },
     { },
     { id: null },
     { id: NaN },
     { id: 'undefined' }
   ];
   
   var invalidEntries = 0;
   
   function isNumber(obj) {
     return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
   }
   
   function filterByID(item) {
     if (isNumber(item.id) && item.id !== 0) {
       return true;
     }
     invalidEntries++;
     return false;
   }
   
   var arrByID = arr.filter(filterByID);
   
   console.log('Filtered Array\n', arrByID);
   // Filtered Array
   // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
   
   console.log('Number of Invalid Entries = ', invalidEntries);
   // Number of Invalid Entries = 5
   ```

   **Tìm kiếm trong mảng**

   Ví dụ sau dùng `filter()` để lọc ra phần tử có nội dung thỏa chuỗi tìm kiếm

   ```js
   var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
   /**
    * Array filters items based on search criteria (query)
    */
   function filterItems(query) {
     return fruits.filter(function(el) {
         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
     })
   }
   
   console.log(filterItems('ap')); // ['apple', 'grapes']
   console.log(filterItems('an')); // ['banana', 'mango', 'orange']
   ```

   **Ví dụ trên với ES2015**

   ```js
   const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
   
   /**
    * Array filters items based on search criteria (query)
    */
   const filterItems = (query) => {
     return fruits.filter((el) =>
       el.toLowerCase().indexOf(query.toLowerCase()) > -1
     );
   }
   
   console.log(filterItems('ap')); // ['apple', 'grapes']
   console.log(filterItems('an')); // ['banana', 'mango', 'orange']
   ```

4. **ArrayA.join(...)**

   Phương thức `**join()**` tạo ra một chuỗi mới bằng cách nối tất cả các phần tử của mảng (hoặc một [array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)), ngăn cách chúng bởi dấu phẩy hoặc một chuỗi ký tự xác định. Nếu mảng chỉ có một phần tử, kết quả sẽ trả về chính phần tử đó.

   ```js
   const elements = ['Fire', 'Air', 'Water'];
   
   console.log(elements.join());
   // expected output: "Fire,Air,Water"
   
   console.log(elements.join(''));
   // expected output: "FireAirWater"
   
   console.log(elements.join('-'));
   // expected output: "Fire-Air-Water"
   
   ```

5. **ArrayA.map(...)**

   Phương thức `**map()**` giúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi.

   > ```js
   > var new_array = arr.map(function callback(currentValue[, index[, array]]) {
   >     // Trả về element mới cho new_array
   > }[, thisArg])
   > ```

   **Callback**

   Hàm để tạo ra phần tử cho mảng mới, nhận vào ba tham số:

   - `currentValue`

     Giá trị của phần tử trong mảng đang được xử lý

   - `index`Optional

     Index của phần tử trong mảng đang được xử lý

   - `array`Optional

     Mảng đang được gọi với `map`

   `thisArg`Optional

   Giá trị gán cho từ khóa `this` bên trong `callback`.

   **Mô tả**

   `map` sẽ gọi hàm `callback` lên **từng phần tử** của mảng, theo thứ tự trong mảng, và tạo ra một mảng mới chứa các phần tử kết quả. `callback` chỉ được gọi cho những vị trí index của mảng được gán giá trị, bao gồm cả [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). Nó không được gọi cho những vị trí **index trống** (là các index của mảng chưa bao giờ được khởi tạo, bao gồm index chưa được gán giá trị hoặc đã bị xóa bằng `delete`).

   `callback` được gọi với ba tham số: giá trị của phần tử, index của phần tử, và chính mảng đang được gọi.

   Nếu tham số `thisArg` được truyền cho `map`, nó sẽ được gán cho từ khóa `this` trong hàm callback. Nếu không, giá trị `undefined` sẽ được dùng cho `this` với strict mode. Tóm lại, giá trị của từ khóa `this` trong hàm `callback` được xác định tuân theo [các quy tắc thông thường để xác định `this` trong một hàm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

   `map` không làm thay đổi mảng ban đầu mà nó được gọi (mặc dù mảng ban đầu vẫn có thể bị thay đổi trong hàm `callback`).

   Các phần tử được `map()` xử lý được xác định từ đầu trước khi `callback` được gọi lần đầu tiên. Những phần tử mới được thêm vào sau khi `map` đã bắt đầu chạy sẽ không được `callback` gọi đến. Trong lúc `map` đang chạy, nếu những phần tử hiện tại của mảng bị thay đổi, thì giá trị mới của chúng sẽ được truyền cho hàm `callback` ngay tại thời điểm `callback` chạy qua. Những phần tử bị xóa sau khi `map` đã bắt đầu và trước khi đến lượt nó cũng sẽ bị bỏ qua.

   Do thuật toán đã quy định trong đặc tả, nếu như mảng ban đầu đã có sẵn những lỗ trống (index rỗng) thì sau khi được gọi với `map`, mảng đầu ra cũng sẽ có những index rỗng như mảng ban đầu.

   `map` sẽ gọi hàm `callback` lên **từng phần tử** của mảng, theo thứ tự trong mảng, và tạo ra một mảng mới chứa các phần tử kết quả. `callback` chỉ được gọi cho những vị trí index của mảng được gán giá trị, bao gồm cả [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). Nó không được gọi cho những vị trí **index trống** (là các index của mảng chưa bao giờ được khởi tạo, bao gồm index chưa được gán giá trị hoặc đã bị xóa bằng `delete`).

   `callback` được gọi với ba tham số: giá trị của phần tử, index của phần tử, và chính mảng đang được gọi.

   Nếu tham số `thisArg` được truyền cho `map`, nó sẽ được gán cho từ khóa `this` trong hàm callback. Nếu không, giá trị `undefined` sẽ được dùng cho `this` với strict mode. Tóm lại, giá trị của từ khóa `this` trong hàm `callback` được xác định tuân theo [các quy tắc thông thường để xác định `this` trong một hàm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

   `map` không làm thay đổi mảng ban đầu mà nó được gọi (mặc dù mảng ban đầu vẫn có thể bị thay đổi trong hàm `callback`).

   Các phần tử được `map()` xử lý được xác định từ đầu trước khi `callback` được gọi lần đầu tiên. Những phần tử mới được thêm vào sau khi `map` đã bắt đầu chạy sẽ không được `callback` gọi đến. Trong lúc `map` đang chạy, nếu những phần tử hiện tại của mảng bị thay đổi, thì giá trị mới của chúng sẽ được truyền cho hàm `callback` ngay tại thời điểm `callback` chạy qua. Những phần tử bị xóa sau khi `map` đã bắt đầu và trước khi đến lượt nó cũng sẽ bị bỏ qua.

   Do thuật toán đã quy định trong đặc tả, nếu như mảng ban đầu đã có sẵn những lỗ trống (index rỗng) thì sau khi được gọi với `map`, mảng đầu ra cũng sẽ có những index rỗng như mảng ban đầu.

   `map` sẽ gọi hàm `callback` lên **từng phần tử** của mảng, theo thứ tự trong mảng, và tạo ra một mảng mới chứa các phần tử kết quả. `callback` chỉ được gọi cho những vị trí index của mảng được gán giá trị, bao gồm cả [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). Nó không được gọi cho những vị trí **index trống** (là các index của mảng chưa bao giờ được khởi tạo, bao gồm index chưa được gán giá trị hoặc đã bị xóa bằng `delete`).

   `callback` được gọi với ba tham số: giá trị của phần tử, index của phần tử, và chính mảng đang được gọi.

   Nếu tham số `thisArg` được truyền cho `map`, nó sẽ được gán cho từ khóa `this` trong hàm callback. Nếu không, giá trị `undefined` sẽ được dùng cho `this` với strict mode. Tóm lại, giá trị của từ khóa `this` trong hàm `callback` được xác định tuân theo [các quy tắc thông thường để xác định `this` trong một hàm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

   `map` không làm thay đổi mảng ban đầu mà nó được gọi (mặc dù mảng ban đầu vẫn có thể bị thay đổi trong hàm `callback`).

   Các phần tử được `map()` xử lý được xác định từ đầu trước khi `callback` được gọi lần đầu tiên. Những phần tử mới được thêm vào sau khi `map` đã bắt đầu chạy sẽ không được `callback` gọi đến. Trong lúc `map` đang chạy, nếu những phần tử hiện tại của mảng bị thay đổi, thì giá trị mới của chúng sẽ được truyền cho hàm `callback` ngay tại thời điểm `callback` chạy qua. Những phần tử bị xóa sau khi `map` đã bắt đầu và trước khi đến lượt nó cũng sẽ bị bỏ qua.

   Do thuật toán đã quy định trong đặc tả, nếu như mảng ban đầu đã có sẵn những lỗ trống (index rỗng) thì sau khi được gọi với `map`, mảng đầu ra cũng sẽ có những index rỗng như mảng ban đầu.

   ### <u>**Ví dụ**</u>

   ```js
   const array1 = [1, 4, 9, 16];
   
   // pass a function to map
   const map1 = array1.map(x => x * 2);
   
   console.log(map1);
   // expected output: Array [2, 8, 18, 32]
   ```

   **Map (ánh xạ)  một mảng các số thành một mảng các giá trị căn bậc hai**

   Đoạn code sau sẽ map một mảng các số thành một mảng mới chứa giá trị là căn bậc hai của các số trong mảng ban đầu.

   ```js
   var numbers = [1, 4, 9];
   var roots = numbers.map(Math.sqrt);
   // mảng roots: [1, 2, 3]
   // mảng numbers vẫn là: [1, 4, 9]
   ```

   **Dùng map để format lại các object trong mảng**

   Đoạn code sau sẽ xử lý một mảng các object và trả về một mảng mới chứa các object đã được format lại:

   ```js
   var kvArray = [{key: 1, value: 10},
                  {key: 2, value: 20},
                  {key: 3, value: 30}];
   var reformattedArray = kvArray.map(obj =>{
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
   });
   // reformattedArray bây giờ là: [{1: 10}, {2: 20}, {3: 30}],
   
   // kvArray vẫn là:
   // [{key: 1, value: 10},
   //  {key: 2, value: 20},
   //  {key: 3, value: 30}]
   ```

   **Map một mảng các số sử dụng hàm có tham số**

   Đoạn code sau minh họa cách thức map hoạt động khi `callback` có sử dụng tham số. Tham số này sẽ có giá trị của từng phần tử của mảng ban đầu khi map duyệt qua mảng này.

   ```js
   var numbers = [1, 4, 9];
   var doubles = numbers.map(function(num) {
     return num * 2;
   });
   
   // doubles is now [2, 8, 18]
   // numbers is still [1, 4, 9]
   ```

   **Sử dụng map một cách độc lập**

   Ví dụ sau sẽ minh họa cách dùng `map` lên một [`String`](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/String) một cách độc lập để trả về một mảng các mã byte trong bảng ASCII đại diện cho từng ký tự của chuỗi.

   ```js
   var map = Array.prototype.map;
   var a = map.call('Hello World', function(x) {
     return x.charCodeAt(0);
   });
   // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
   ```

   **Sử dụng map với kết quả của querySelectorAll**

   Ví dụ sau minh họa cách duyệt qua một tập các object (không phải mảng) trả về từ `querySelectorAll`. Trong trường hợp này, chúng ta sẽ in ra giá trị của tất cả các option được chọn (của các thẻ select) lên console: 

   ```js
   var elems = document.querySelectorAll('select option:checked');
   var values = Array.prototype.map.call(elems, function(obj) {
     return obj.value;
   });
   ```

   Cách trên có thể được giải quyết đơn giản hơn bằng cách sử dụng [`Array.from()`](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

6. **ArrayA.pop()**

   Phương thức `**pop()**` xoá phần tử **cuối cùng** của một mảng và trả về phần tử đó. Phương thức này làm thay đổi độ dài của mảng.

   ```js
   const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
   
   console.log(plants.pop());
   // expected output: "tomato"
   
   console.log(plants);
   // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
   
   plants.pop();
   
   console.log(plants);
   // expected output: Array ["broccoli", "cauliflower", "cabbage"]
   ```

7. **ArrayA.push([element])**

   Phương thức `**push()**` giúp thêm 1 hay nhiều phần tử vào cuối mảng và trả về chiều dài mới của mảng.

   ```js
   const animals = ['pigs', 'goats', 'sheep'];
   
   const count = animals.push('cows');
   console.log(count);
   // expected output: 4
   console.log(animals);
   // expected output: Array ["pigs", "goats", "sheep", "cows"]
   
   animals.push('chickens', 'cats', 'dogs');
   console.log(animals);
   // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
   
   ```

8. **ArrayA.reduce(callback[, initialValue])**

   Phương thức `**reduce()**` dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

   ```js
   const array1 = [1, 2, 3, 4];
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   
   // 1 + 2 + 3 + 4
   console.log(array1.reduce(reducer));
   // expected output: 10
   
   // 5 + 1 + 2 + 3 + 4
   console.log(array1.reduce(reducer, 5));
   // expected output: 15
   ```

   **Callback**

   Hàm dùng để thực thi với từng phần tử (element) của mảng, nhận vào 04 tham số:

   - `accumulator`

     Biến tích lũy, truyền giá trị trả về của mỗi lần gọi callback; nó là giá trị tích lũy được trả về trong lần gọi callback trước, hoặc giá trị của tham số `initialValue`, nếu được cung cấp (xem bên dưới).

   - `currentValue`

     Phần tử trong mảng hiện tại đang được xử lý.

   - `currentIndex`Optional

     Chỉ mục (index) của phần tử đang được xử lý. Bắt đầu tại 0, nếu giá trị `initialValue` được cung cấp, và tại 1 nếu không có `initialValue`.

   - `array`Optional

     Mảng đang được gọi với `reduce()`.

   `initialValue`Optional

   Giá trị cho tham số thứ nhất (`accumulator`) của hàm `callback` trong lần gọi đầu tiên. Nếu giá trị ban đầu này không được cung cấp, phần tử đầu tiên của mảng sẽ được dùng. Do đó, gọi `reduce()` trên một mảng rỗng và không có giá trị ban đầu sẽ gây ra lỗi.

   > ```js
   > var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
   > var maxCallback2 = ( max, cur ) => Math.max( max, cur );
   > 
   > // reduce() không có initialValue
   > [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
   > [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
   > [                      ].reduce( maxCallback ); // TypeError
   > 
   > // map/reduce; giải pháp hay hơn, và nó có thể áp dụng được cho mảng rỗng hoặc lớn hơn
   > [ { x: 22 }, { x: 42 } ].map( el => el.x )
   >                         .reduce( maxCallback2, -Infinity );
   > ```

   **Cách làm việc của reduce()**

   Giả sử có một đoạn code với `reduce()` được hiện thực như sau:

   | `callback`       | `accumulator` | `currentValue` | `currentIndex` | `array`           | giá trị trả về |
   | :--------------- | :------------ | :------------- | :------------- | :---------------- | -------------: |
   | lần gọi thứ nhất | `0`           | `1`            | 1              | `[0, 1, 2, 3, 4]` |            `1` |
   | lần gọi thứ hai  | `1`           | `2`            | 2              | `[0, 1, 2, 3, 4]` |            `3` |
   | lần gọi thứ ba   | `3`           | `3`            | 3              | `[0, 1, 2, 3, 4]` |            `6` |
   | lần gọi thứ tư   | `6`           | `4`            | 4              | `[0, 1, 2, 3, 4]` |           `10` |

   Giá trị trả về cho `reduce()` chính là giá trị trả về của lần gọi callback cuối cùng (`10`).

   Bạn cũng có thể cung cấp một hàm mũi tên [Arrow Function](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Functions/Arrow_functions) thay vì một hàm đầy đủ. Đoạn code sau đây sẽ cho kết quả giống như đoạn code ở trên:

   ```js
   [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue );
   ```

   Nếu bạn cung cấp giá trị `initialValue` cho tham số thứ hai của hàm `reduce()`, thì kết quả sẽ như bên dưới:'

   ```js
   [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
       return accumulator + currentValue;
   }, 10);
   ```

   | `callback`       | `accumulator` | `currentValue` | `currentIndex` | `array`           | giá trị trả về |
   | :--------------- | :------------ | :------------- | :------------- | :---------------- | :------------- |
   | lần gọi thứ nhất | `10`          | `0`            | `0`            | `[0, 1, 2, 3, 4]` | `10`           |
   | lần gọi thứ hai  | `10`          | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `11`           |
   | lần gọi thứ ba   | `11`          | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `13`           |
   | lần gọi thứ tư   | `13`          | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `16`           |
   | lần gọi thứ năm  | `16`          | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `20`           |

   Giá trị trả về cho `reduce()` lần này sẽ là `20`.

   ```js
   var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
     return accumulator + currentValue;
   }, 0);
   // sum is 6
   ```

   Tương tự, nhưng viết bằng hàm **arrow function**

   ```js
   var total = [ 0, 1, 2, 3 ].reduce(
     ( accumulator, currentValue ) => accumulator + currentValue,
     0
   );
   ```

   **Tính tổng các giá trị bên trong một mảng các object**

   Để tính tổng các giá trị nằm bên trong các phần tử là object, bạn **phải** cung cấp một giá trị ban đầu để từng phần tử đều được callback chạy qua (và `accumulator` luôn luôn là giá trị kiểu số):

   ```js
   var initialValue = 0;
   var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
       return accumulator + currentValue.x;
   },initialValue)
   
   console.log(sum) // logs 6
   ```

   Tương tự, viết bằng **arrow function:**

   ```js
   var initialValue = 0;
   var sum = [{x: 1}, {x:2}, {x:3}].reduce(
       (accumulator, currentValue) => accumulator + currentValue.x
       ,initialValue
   );
   
   console.log(sum) // logs 6
   ```

   **VD: Trải phẳng một mảng chứa nhiều mảng con**

   ```js
   var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
     function(accumulator, currentValue) {
       return accumulator.concat(currentValue);
     },
     []
   );
   // flattened is [0, 1, 2, 3, 4, 5]
   ```

   Tương tự, viết bằng arrow function:

   ```js
   var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
     ( accumulator, currentValue ) => accumulator.concat(currentValue),
     []
   );
   ```

   **VD: Đếm số lần xuất hiệu của phần tử trong mảng**

   ```js
   var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
   
   var countedNames = names.reduce(function (allNames, name) {
     if (name in allNames) {
       allNames[name]++;
     }
     else {
       allNames[name] = 1;
     }
     return allNames;
   }, {});
   // countedNames is:
   // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
   ```

   **VD: Nhóm các đối tượng theo giá trị property nào đó**

   ```js
   var people = [
     { name: 'Alice', age: 21 },
     { name: 'Max', age: 20 },
     { name: 'Jane', age: 20 }
   ];
   
   function groupBy(objectArray, property) {
     return objectArray.reduce(function (acc, obj) {
       var key = obj[property];
       if (!acc[key]) {
         acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
     }, {});
   }
   
   var groupedPeople = groupBy(people, 'age');
   // groupedPeople is:
   // {
   //   20: [
   //     { name: 'Max', age: 20 },
   //     { name: 'Jane', age: 20 }
   //   ],
   //   21: [{ name: 'Alice', age: 21 }]
   // }
   ```

   **VD: Ghép các mảng con bên trong các object sử dụng toán tử spread và initialValue**

   ```js
   // friends - an array of objects
   // where object field "books" - list of favorite books
   var friends = [{
     name: 'Anna',
     books: ['Bible', 'Harry Potter'],
     age: 21
   }, {
     name: 'Bob',
     books: ['War and peace', 'Romeo and Juliet'],
     age: 26
   }, {
     name: 'Alice',
     books: ['The Lord of the Rings', 'The Shining'],
     age: 18
   }];
   // allbooks - list which will contain all friends' books +
   // additional list contained in initialValue
   var allbooks = friends.reduce(function(accumulator, currentValue) {
     return [...accumulator, ...currentValue.books];
   }, ['Alphabet']);
   
   // allbooks = [
   //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
   //   'Romeo and Juliet', 'The Lord of the Rings',
   //   'The Shining'
   // ]
   ```

   **VD: Xóa các phần tử bị trùng trong mảng**

   ```js
   let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
   let result = arr.sort().reduce((accumulator, current) => {
       const length = accumulator.length
       if (length === 0 || accumulator[length - 1] !== current) {
           accumulator.push(current);
       }
       return accumulator;
   }, []);
   console.log(result); //[1,2,3,4,5]
   ```

   **VD: Chạy các Promise theo trình tự**

   ```js
   /**
    * Runs promises from array of functions that can return promises
    * in chained manner
    *
    * @param {array} arr - promise arr
    * @return {Object} promise object
    */
   function runPromiseInSequence(arr, input) {
     return arr.reduce(
       (promiseChain, currentFunction) => promiseChain.then(currentFunction),
       Promise.resolve(input)
     );
   }
   
   // promise function 1
   function p1(a) {
     return new Promise((resolve, reject) => {
       resolve(a * 5);
     });
   }
   
   // promise function 2
   function p2(a) {
     return new Promise((resolve, reject) => {
       resolve(a * 2);
     });
   }
   
   // function 3  - will be wrapped in a resolved promise by .then()
   function f3(a) {
    return a * 3;
   }
   
   // promise function 4
   function p4(a) {
     return new Promise((resolve, reject) => {
       resolve(a * 4);
     });
   }
   
   const promiseArr = [p1, p2, f3, p4];
   runPromiseInSequence(promiseArr, 10)
     .then(console.log);   // 1200
   ```

   **VD: Tổ hợp các hàng và gọi chuyền (piping)**

   ```js
   // Building-blocks to use for composition
   const double = x => x + x;
   const triple = x => 3 * x;
   const quadruple = x => 4 * x;
   
   // Function composition enabling pipe functionality
   const pipe = (...functions) => input => functions.reduce(
       (acc, fn) => fn(acc),
       input
   );
   
   // Composed functions for multiplication of specific values
   const multiply6 = pipe(double, triple);
   const multiply9 = pipe(triple, triple);
   const multiply16 = pipe(quadruple, quadruple);
   const multiply24 = pipe(double, triple, quadruple);
   
   // Usage
   multiply6(6); // 36
   multiply9(9); // 81
   multiply16(16); // 256
   multiply24(10); // 240
   ```

   **VD: Hiện thực lại map() sử dụng reduce()**

   ```js
   if (!Array.prototype.mapUsingReduce) {
     Array.prototype.mapUsingReduce = function(callback, thisArg) {
       return this.reduce(function(mappedArray, currentValue, index, array) {
         mappedArray[index] = callback.call(thisArg, currentValue, index, array);
         return mappedArray;
       }, []);
     };
   }
   
   [1, 2, , 3].mapUsingReduce(
     (currentValue, index, array) => currentValue + index + array.length
   ); // [5, 7, , 10]
   
   ```

9. **reverse()**

   Hàm `**reverse()** khi gọi bởi một mảng thì` đảo ngược thứ tự của chính mảng đó. Phần tử đầu tiên của m

   ```js
   var myArray = ['one', 'two', 'three'];
   myArray.reverse();
   
   console.log(myArray) // ['three', 'two', 'one']
   ```

10. **slice()**

    Phương thức `**slice()**` trả về một bản sao tham chiếu (shallow copy) một phần của một mảng dưới dạng một mảng mới nhận các giá trị có chỉ số từ `begin` dến `end` **(không bao gồm** `end`). Mảng ban đầu không bị thay đổi.

    ### Cú pháp

    > arr.slice()
    > arr.slice(begin)
    > arr.slice(begin, end)

    **Tham số**

    `begin` Optional

    Chỉ số bắt đầu chọn phần tử từ phần tử 0.

    Nếu chỉ số này là số âm, được xem như tính ngược từ cuối của mảng. `slice(-2)` chọn hai phần tử cuối cùng của mảng.

    Nếu `begin` là không xác định (undefined), `slice` bắt đầu từ chỉ số `0`.

       Nếu begin lớn hơn độ dài của mảng, một mảng trống được trả về.

    `end` Optional

    Chỉ số ngừng chọn phần tử. `slice` chọn ra các phần tử có chỉ số trước chỉ số `end`.

    Ví dụ, `slice(1,4)` chọn phần thử thứ hai, thứ ba và thứ tư (ở các chỉ số 1, 2, và 3).

    Chỉ số âm tính ngược từ cuối mảng về. `slice(2,-1)` chọn các phần tử thứ ba cho đến phần tử sát cuối của mảng, không bao gồm phần từ cuối cùng ở chỉ số -1.

    Nếu tham số `end` không được truyền vào, `slice` chọn đến cuối mảng (`arr.length`)`.`

    Nếu `end` lớn hơn độ dài mảng, `slice` chỉ chọn đến cuối mảng (`arr.length`).

    **Gía trị trả về *Trả về một mảng mới***

    ### <u>Ví dụ</u>

    **Trả về mảng con của một mảng**

    ```js
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    var citrus = fruits.slice(1, 3);
    
    // fruits có giá trị ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
    // citrus có giá trị ['Orange','Lemon']
    ```

    Trong ví dụ sau, `slice` tạo một mảng mới, `newCar`, từ `myCar`. Cả hai chứa tham chiếu tới đối tượng `myHonda`. Khi trường color của đối tượng `myHonda` đổi sang purple, cả hai mảng đều thấy sự thay đổi này.

    ```js
    // Using slice, create newCar from myCar.
    var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
    var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
    var newCar = myCar.slice(0, 2);
    // Display the values of myCar, newCar, and the color of myHonda
    //  referenced from both arrays.
    console.log('myCar = ' + JSON.stringify(myCar));
    console.log('newCar = ' + JSON.stringify(newCar));
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);
    
    // Change the color of myHonda.
    myHonda.color = 'purple';
    console.log('The new color of my Honda is ' + myHonda.color);
    
    // Display the color of myHonda referenced from both arrays.
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);
    ```

    Đoạn mã trên in ra:

    ```js
    myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
             'cherry condition', 'purchased 1997']
    newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
    myCar[0].color = red
    newCar[0].color = red
    The new color of my Honda is purple
    myCar[0].color = purple
    newCar[0].color = purple
    ```

11. **sort()**

    Phương thức `**sort()**` sẽ sắp xếp các phần tử của mảng ngay tại chỗ (*[in place](https://en.wikipedia.org/wiki/In-place_algorithm)*) và trả về mảng đó. Kết quả sắp xếp có thể không [ổn định](https://vi.wikipedia.org/wiki/Thuật_toán_sắp_xếp#Sắp_xếp_ổn_định) ([stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)). Cách sắp xếp mặc định là theo Unicode code point của chuỗi.

    ```js
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 100000, 21, 30, 4]
    ```

    ### <u>**Ví dụ**</u>

    Để so sánh giữa các số, chỉ cần lấy `a` trừ cho `b`. Hàm dưới đây sẽ sắp xếp mảng theo chiều tăng dần (nếu mảng không chứa `Infinity` và `NaN`):

    ```js
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers);
    
    // [1, 2, 3, 4, 5]
    ```

    Các Object cũng có thể được sắp xếp với một trong những thuộc tính của chúng.

    ```js
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 }
    ];
    
    // ?sắp xếp theo value (giá trị)
    items.sort(function (a, b) {
      return a.value - b.value;
    });
    
    // sắp xếp theo name (tên)
    items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // name trùng nhau
      return 0;
    });
    ```

12. **toString()**

    Phương thức `**toString()**`trả về một chuỗi string đại diện cho mảng được chỉ định và các phần tử trong mảng đó.

    ```js
    const array1 = [1, 2, 'a', '1a'];
    
    console.log(array1.toString());
    // expected output: "1,2,a,1a"
    ```

13. **unship()**

    Phương thức **unshift()** ***thêm một hoặc nhiều phần tử vào vị trí đầu mảng sau đó trả về chiều dài của mảng mới.***

    ```js
    const array1 = [1, 2, 3];
    
    console.log(array1.unshift(4, 5));
    // expected output: 5
    
    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]
    ```

    **Ví dụ**

    ```js
    let arr = [1, 2];
    
    arr.unshift(0); // result of the call is 3, which is the new array length
    // arr is [0, 1, 2]
    
    arr.unshift(-2, -1); // the new array length is 5
    // arr is [-2, -1, 0, 1, 2]
    
    arr.unshift([-4, -3]); // the new array length is 6
    // arr is [[-4, -3], -2, -1, 0, 1, 2]
    
    arr.unshift([-7, -6], [-5]); // the new array length is 8
    // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
    ```

    