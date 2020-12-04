// var rows = 5;
// var cols = 5;
// for (var i = 1; i <= rows; i++) {
//     for (var j = 1; j <= cols; j++) {
//         document.write("*")
//     }
//     document.write("</br>");
// }






// var age = "what is your age";
// var Output = prompt(age);





// var x = prompt("Where does the Pope live?");

// if (x === "Vatican") {
//     alert("Correct!");

// }






// var name = prompt("what is your name?");

// if (name === "rohit")
//     alert("THANKS....");

// else if (name !== "rohit")
//     alert("wrong answer.")

// var age = +prompt("Enter you age.?")
// if (age == 14) {
//     alert("you are is equal")

// } else if (age < 14) {
//     alert("your age is less")

// } else {
//     alert("you are no more with less age")
// }




// var age = +prompt("Enter your Age.?")
// var gender = prompt("Enter your Gender.??")
// if (age > 18 || gender == "male") {
//     alert(" you Are allow to ride")

// } else(
//     alert("you are not allow ")
// )














// var age = +prompt("Enter your Age.?")
// var gender = prompt("Enter your Gender.??")
// if (age > 18 && gender == "male") {
//     alert(" you Are allow to ride")

// } else(
//     alert("you are not allow ")
// )





// var a = ("5")
// if (a === 5) {
//     alert("true")

// } else(
//     alert("false"))






// notequal






// var a = 10;
// if (a !== 15) {
//     alert("corrent")
// } else {
//     alert("incorrect.")
// }




// var percentage = +prompt("Enter your percentage.?")
// if (percentage >= 80 && percentage <= 100) {
//     alert("A+")

// } else if (percentage >= 70 && percentage < 80) {
//     alert("A")

// } else if (percentage >= 60 && percentage < 70) {
//     alert("B")

// } else if (percentage >= 50 && percentage < 60) {
//     alert("C")

// } else if (percentage >= 40 && percentage < 50) {
//     alert("D")

// } else if (percentage >= 30 && percentage < 40) {
//     alert("E")

// } else if (percentage >= 20 && percentage < 30) {
//     alert("F")

// } else {
//     alert("you didnot write correct percentage...")
// }






// var nameArray = ["rohit", "shan", "ali", "bilal"]
// var name = prompt("Enter you name????")
// if (name === nameArray[0], [1], [2], [3]) {
//     alert("Welcome...!!!")




// var array = ["rohit", "shan", "rohit", "rohit", "rohit", "rohit"]
// console.log(array)
// array[6] = "rohit";
// array[7] = "manohar";
// array[6] = "lala";

// var student_names = ["rohit", "rohit", "manohar", "shan"]
// console.log(student_names)


// student_names.pop() // this method remove element in last index value

// student_names.push("rohit") // this method add element in last index value

// student_names.shift() //this method remove element in start index value

// student_names.unshift("fish", "ferret"); //this method add element in start index value

// // student_names.splice(0, 0, "pig", "duck", "emu"); thisfist num add and second remove

// var no_names = student_names.slice(3, 4);

// console.log(no_names)

// for(m=1; m <= 5; m++)





// var list = ["rohit", "rohit", "manohar", "shan"]
// var checkyouname = prompt("Enter you name")
// for (var i = 0; i < 10; i++) {
//     if (checkyouname === list[i]) {
//         alert("hello")
//     }
// }




// var list = ["rohit", "rohit", "manohar", "shan"]
// var checkyouname = prompt("Enter you name")
// for (var i = 0; i < 20; i++) {
//     if (checkyouname === list[i]) {
//         alert("yes you are pass")
//     }
// }





// var list = ["rohit", "rohit", "manohar", "shan"]
// var checkyouname = prompt("Enter you name")
// var i = 0;
// while (i < list) {

//     i++; {
//         if (checkyouname === list[i]) {
//             alert("rohit")
//         }
//     }
// }


// var list = ["rohit", "rohit", "manohar", "shan"]
// var checkyouname = prompt("Enter you name")
// for (var i = 0; i < 4; i++) {
//     if (checkyouname === list[i]) {
//         alert("hello")
//     }


// }

// var list = ["rohit", "rohit", "manohar", "shan"]
// var checkyouname = prompt("Enter you name")
// for (var i = 0; i < list.length; i++) {
//     if (checkyouname === list[i]) {
//         alert("rohit");
//     } else(alert("not"));
//     break;

// }


// var y = false;
// var name = prompt("Enter you name")
// var list = ["rohit", "rohit", "manohar", "shan"]
// for (var i = 0; i < list.length; i++) {
//     if (name === list[i]) {
//         y = true
//         alert("it is clearnest")
//         break;
//     }
// }
// if (y === false) {
//     alert("it is not a list")
// }


// var y = false;
// var name = prompt("Enter you name")
// var list = ["rohit", "rohit", "manohar", "shan"]
// for (var i = 0; i < list.length; i++) {
//     if (name === list[i]) {
//         y = true
//         alert("true")
//         break;
//     }
// }

// if (y === false) {
//     alert("false")
// }
// var y = false;
// var name = prompt("Enter")
// var list = ["rohit", "rohit", "manohar", "shan"]
// for (var i = 0; i < list.length; i++) {
//     if (name === list[i]) {
//         y = true
//         alert("yes")
//     }
// }
// if (y === false) {
//     alert("")
// }


// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }





// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toUpperCase();
// document.write(cityToCheck)




// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["ROHIT", "cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }


// var table = +prompt("ENTER TABLE")

// for (i = 1; i <= 10; i++) {
//     document.write(table + "x" + i + "=" + table * i + "<br>")

// }


// var y = false
// var name = prompt("Enter you name")
// name = name.toUpperCase();
// var list = ["ROHIT", "rohit", "MANOHAR", "LALA"]
// for (var i = 0; i <= list.length; i++) {

//     if (name === list[i]) {
//         y = true
//         alert("yes!! your name is here")
//     }
// }
// if (y === false) {
//     alert("not valided")
// }

// for (var i = 0; i <= 5; i++) {
//     for (var j = 0; j < 3; j++) {
//         document.write(i + "pakistan" + "<br>")
//     }

// }



// var first_name = ["Rohit", "rohit", "lucky", "amar"]
// var late_name = ["bhatti"]
// for (var i = 0; i < first_name.length; i++) {
//     for (var j = 0; j < late_name.length; j++) {
//         console.log(first_name[i] + "  " + late_name[j])
//     }
// }



// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         document.write("#")
//     }
//     document.write("<br>")
// }












// var name = prompt("Enter you name")
// for (var i = 1; i <= name; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }







// var firstName = ["Rohit", "rohit", "lucky", "amar"]
// var lastName = ["Bhatti"]
// var fullName = []
// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++) {
//         fullName.push(firstName[i] + lastName[j])


//         document.write(i + " " + fullName + "<br>")


//     }
// }




// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         document.write("*")

//     }
//     document.write("<br>")
// }





// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= 5; j++) {
//         document.write("#")
//     }
//     document.write("<br>")
// }








// for (var i = 0; i <= 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         document.write("#")
//     }
//     document.write("<br>")
// }


// var word = prompt("Enter WOrd")
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//     console.log(word[i])
// }


// var word = prompt("Enter WORD")
// var check = "";
// for (var i = word.length - 1; i >= 0; --i) {
//     document.write(word[i])
// }

// var name = prompt(" Enter you name");
// name = name.toLowerCase();
// if (name.length > 3) {
//     var three = name.slice(0, 3);
//     document.write(three)
// }

// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")
// for (var i = 0; i < name.length; i++) {
//     if (name.slice(i, i + 5) === "rohit") {
//         name = name.slice(0, 1) + "programmer" + name.slice(i + 5)
//     }
// }
// document.write(name)




// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")

// var change = prompt("ENTER ANY TEXT CHANGE");
// var insert = prompt("ENTER ANY TEXT insert");
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + change.length) === change) {
//         string = string.slice(0, i) + insert + string.slice(i + change.length)
//     }
// }
// console.log(string)




// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")

// // var change = prompt("ENTER ANY TEXT CHANGE");
// // var insert = prompt("ENTER ANY TEXT insert");
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 5) === "rohit") {
//         string = string.slice(0, i) + "programmer" + string.slice(i + 5)
//     }
// }
// console.log(string)



// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 5) === "rohit") {
//         string.slice(0, i) + "programmer" + string.slice(i + 5)

//     }
// }
// console.log(string)


// var firstName = prompt("name")
//     // var firstChar = firstName.charAt(0)
// var lastChar = name.charAt(name.length - 1);

// document.write(lastChar)


// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")
// var NameOne = prompt("Enter")
// string = string.replace(/NameOne/, "programmer ")
// document.write(string)


// function button() {
//     var name = prompt("ENter you name")
//     alert("HOW are YOU " + " " + name + "!")
// }


// var change = prompt("ENTER CHANGE")
// var insent = prompt("inent")
// var string = (" Lorem ipsum dolor rohit amet consectetur rohit elit. Nihil, ipsa! Porro rohit pariatur expedita impedit, ullam voluptatum delectus dolor accusamus dignissimos. Et sunt voluptatem officia voluptatum consequuntur mollitia quibusdam qui.")
// string = string.replace(change, insent)
// document.write(string)


// var i = 0;
// while (i > 0) {
//     alert(i);
//     i++;
// }





// var i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 8);


// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// console.log(segIndex)


// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// document.getElementById("demo").innerHTML = myFunction(4, 3);

// var num = Math.random();
// console.log(num)


// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.random();
// }



// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.random();
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.pow(1, 1);
// }

// var b = 20;
// document.getElementById("demo").innerHTML = b;


// var Name = prompt("ENter")


// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.max(Name);
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.PI;
// }




// var num1 = 42;
// var num2 = '42';
// if (num1 === num2) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// // Will log `false`





// var integerString = "24"

// var num = Number(integerString);
// console.log(num)




// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.floor((Math.random() * 7) + 1);
// }


// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.floor((Math.random() * 100) + 1);
// }


// function myFunction() {
//     var num = prompt("enter")
//     document.getElementById('demo')
//         .innerHTML = Math.round(num)
// }



// var rightNow = new Date();
// var dateString = rightNow.toString();


// console.log(rightNow)



// IMAGE slider

// start point
var i = 0;
var image = ["image/1.jpg", "image/2.jpg", "image/3.jpg"]
var time = 1000;
// image list
image[0] = "image/1.jpg";
image[1] = "image/2.jpg";
image[2] = "image/3.jpg";



// change picture
function imageChange() {
    document.slider.src = image[i]
    if (i < image.length - 1) {
        i++
    } else {
        i = 0;
    }
    setTimeout("imageChange()", time)
}
window.onload = imageChange;



