 #compsci #compsys 
![[Pasted image 20230926151626.png]]


## Java Python Alternatives

| Python | Java |
|--------|------|
| **Data Types** | |
| `int` | `int` |
| `float` | `float` |
| `str` | `String` |
| `list` | `ArrayList` |
| `dict` | `HashMap` |
| `tuple` | `Array` or custom class |
| `set` | `HashSet` |
| `bool` | `boolean` |
| **Control Structures** | |
| `if` | `if` |
| `elif` | `else if` |
| `else` | `else` |
| `for item in items:` | `for(Type item : items) {` |
| `for i in range(n):` | `for(int i = 0; i < n; i++) {` |
| `while condition:` | `while(condition) {` |
| **Functions and Methods** | |
| `def function():` | `public void function() {` |
| `len(collection)` | `collection.size()` |
| `print(item)` | `System.out.println(item);` |
| `input(prompt)` | `Scanner scanner = new Scanner(System.in); scanner.nextLine();` |
| `str(value)` | `String.valueOf(value)` |
| `int(value)` | `Integer.parseInt(value)` |
| `float(value)` | `Float.parseFloat(value)` |
| **Object-Oriented Programming** | |
| `class MyClass:` | `public class MyClass {` |
| `def __init__(self, arg):` | `public MyClass(Type arg) {` |
| `self.attribute` | `this.attribute` |
| `def method(self, arg):` | `public void method(Type arg) {` |
| **Exception Handling** | |
| `try:` | `try {` |
| `except Exception as e:` | `catch(Exception e) {` |
| `finally:` | `finally {` |
| **Importing Libraries** | |
| `import library` | `import package.class;` |
| `from library import class` | `import package.class;` |

### Operators

| Operator | Name           | Description                            | Example |
| -------- | -------------- | -------------------------------------- | ------- |
| +        | Addition       | Adds together two values               | x + y   |
| -        | Subtraction    | Subtracts one value from another       | x - y   |
| *        | Multiplication | Multiplies two values                  | x * y   |
| /        | Division       | Divides one value by another           | x / y   |
| %        | Modulus        | Returns the division remainder         | x % y   |
| ++       | Increment      | Increases the value of a variable by 1 | ++x     |
| --       | Decrement      | Decreases the value of a variable by 1 | --x     |

---

### TIME BULLSHIT
---
Days in a month on a specific year

```java
public static int getMonthDays(int month, int year) {
    int daysInMonth ;
    // 30 days has Sept, Apr, June 7 Nov
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        daysInMonth = 30;
    } else {


        if (month == 2) {
        // except for feb, that one's dumb
            daysInMonth = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;
        
        
        } else {
		    // All the Rest have 31
            daysInMonth = 31;
        }
    }
    return daysInMonth;
}
```

if num div fizz boo bar

```java

if (both){

} else if (/3){

} else if (/5)


```


```java

int days;





switch(month){
case 1:
	print("theres " + days + "in the month January");
	break;
case 2:
	print("theres " + days + "in the month January");
	break;
default:
	print("not a month")
	break;
}


```







```java

String replace(char a, char b) // replaces 2 characters since thats what the input is

String replace(String a, String b) // replaces 2 strings


```