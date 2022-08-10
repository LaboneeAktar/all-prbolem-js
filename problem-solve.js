// 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of apples is tk 700.

/*
var takaFromHarryMom = 1000;
// console.log(takaFromHarryMom);
var applePrice = 300;
var orangePrice = 400;
var totalCost = applePrice + orangePrice;
console.log(totalCost);
var backTk = takaFromHarryMom - totalCost;
console.log(backTk);
*/


// 2) Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
/*
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMark = mathematics + biology + chemistry + physics + bangla;
var averageMark = totalMark / 5;
averageMark = averageMark.toFixed(2);
var averageMarkFinal = parseFloat(averageMark);
console.log(averageMarkFinal);
*/



// 4) John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings(‘I am going to be’ and ‘an awesome web developer’) and print them in one line. Help John write the program.

/*
var firstString = 'I am going to be';
var secondString = 'an awesome web developer';
var oneLineOutput = firstString + ' ' + secondString;
console.log(oneLineOutput);
*/

// 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number 119 and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.

/*
var givenNumber = 119;
// var dividedBy = 5;
// var reminder = givenNumber % dividedBy;
var reminder = givenNumber % 5;
console.log(reminder);
*/


// 6) You are given an array: var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.
/*
var fruits = ['Apple', 'Banana', 'Orange'];
//.. index of banana..
var indexBanana = fruits.indexOf('Banana');
console.log(indexBanana);
// .. replace bananawith mango ..
fruits[1] = 'Mango';
console.log(fruits);
// ..remove orange..
fruits.pop();
console.log(fruits);
// .. add watermelon..
fruits.push('Watermelon');
console.log(fruits);
*/

//7) You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else

/*
// ..My Grade..
var myScore = 85;
if (myScore >= 80) {
    console.log('My Grade is A');
}
else if (myScore >= 60) {
    console.log('My Grade is B');
}
else if (myScore >= 50) {
    console.log('My Grade is C');
}
else if (myScore >= 40) {
    console.log('My Grade is D');
}
else {
    console.log('My Grade is F');
}

// Tom's Grade
var tomScore = 66;
if (tomScore >= 80) {
    console.log('Tom Grade is A');
}
else if (tomScore >= 60) {
    console.log('Tom Grade is B');
}
else if (tomScore >= 50) {
    console.log('Tom Grade is C');
}
else if (tomScore >= 40) {
    console.log('Tom Grade is D');
}
else {
    console.log('Tom Grade is F');
}

// Peter's Grade
var peterScore = 56;
if (peterScore >= 80) {
    console.log('Peter Grade is A');
}
else if (peterScore >= 60) {
    console.log('Peter Grade is B');
}
else if (peterScore >= 50) {
    console.log('Peter Grade is C');
}
else if (peterScore >= 40) {
    console.log('Peter Grade is D');
}
else {
    console.log('Peter Grade is F');
}

// Jane's Grade
var janeScore = 95;
if (janeScore >= 80) {
    console.log('Jane Grade is A');
}
else if (janeScore >= 60) {
    console.log('Jane Grade is B');
}
else if (janeScore >= 50) {
    console.log('Jane Grade is C');
}
else if (janeScore >= 40) {
    console.log('Jane Grade is D');
}
else {
    console.log('Jane Grade is F');
}

// Jhon's Grade
var jhonScore = 40;
if (jhonScore >= 80) {
    console.log('Jhon Grade is A');
}
else if (jhonScore >= 60) {
    console.log('Jhon Grade is B');
}
else if (jhonScore >= 50) {
    console.log('Jhon Grade is C');
}
else if (jhonScore >= 40) {
    console.log('Jhon Grade is D');
}
else {
    console.log('Jhon Grade is F');
}
*/

// 8) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

/*
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
*/

// 9) You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else. Isosceles => two sides are equal

/*
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('It is Isosceles');
}
else {
    console.log('It is not Isosceles');
}
*/

//12) প্রতি দি ন ত োমার কাজ কি ?
//১) রাত ৮ টা বাজে মডি উল আনলক কর ো
// ৩) ভিডিও দেখতে দেখতে ন োটস নাও
// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস কর ো
// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস কর ো
// ৫) ক োন কিছু বঝুতে না পারলে (চিন্তা করে দেখ ো এইখানে কিন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে জয়ে ন কর ো এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে দে খান ো



/*......................... for loop............
var dailyRoutine = ['Unlock video at 8 clock', 'Practice with Video', 'Takes note from video', 'Practice myself', 'If I do not understand i will join suport session'];
for (var i = 1; i <= 10; i++) {
    console.log(i);
    for (var j = 0; j < dailyRoutine.length; j++) {
        var dailyCourseRoutine = dailyRoutine[j];
        console.log(dailyCourseRoutine);
    }
}
*/

/* 13) ......................... while loop............
var dailyRoutine = ['Unlock video at 8 clock', 'Practice with Video', 'Takes note from video', 'Practice myself', 'If I do not understand i will join suport session'];
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
    var j = 0;
    while (j < dailyRoutine.length) {
        var dailyCourseRoutine = dailyRoutine[j];
        console.log(dailyCourseRoutine);
        j++;
    }
}
*/

// 14) ...............  for loop reverse   .......................
/*
var dailyRoutine = ['Unlock video at 8 clock', 'Practice with Video', 'Takes note from video', 'Practice myself', 'If I do not understand i will join suport session'];

for (var i = 10; i >= 1; i--) {
    console.log(i);
    for (var j = dailyRoutine.length - 1; j >= 0; j--) {
        var dailyCourseRoutine = dailyRoutine[j];
        console.log(dailyCourseRoutine);
    }
}
*/


// 15)...............  while loop reverse   .......................
/*
var dailyRoutine = ['Unlock video at 8 clock', 'Practice with Video', 'Takes note from video', 'Practice myself', 'If I do not understand i will join suport session'];
var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
    var j = dailyRoutine.length - 1;
    while (j >= 0) {
        var dailyCourseRoutine = dailyRoutine[j];
        console.log(dailyCourseRoutine);
        j--;
    }
}
*/


//16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।
/*
var myMoney = 3000;
if (80000 < myMoney) {
    console.log("I will Buy MacBook");
}
else if (60000 < myMoney) {
    console.log("I will Buy Gaming Lapotop");
}
else if (40000 < myMoney) {
    console.log("I will Buy Lenovo Yoga");
}
else if (20000 < myMoney) {
    console.log("I will Buy Old Laptop");
}
else {
    console.log("I will Work in MY Phone");
}
*/

/* 17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও।
for (var i = 1; i <= 39; i++) {
    console.log('Aske amar mon balo nai');
    console.log(i);
}

// 19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও
for (var i = 58; i <= 98; i++) {
    console.log(i);
}

// 20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
দে খাও
// Even Number .....
for (var i = 412; i <= 456; i += 2) {
    console.log(i);
}

// 21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও

for (var i = 581; i <= 623; i += 2) {
    console.log(i);
}
*/

// 22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।

/*
var learnFromCourse = ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript'];
for (var i = 0; i < 1; i++) {
    console.log(learnFromCourse);
}
var learnFromCourse = ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript'];
for (var i = 0; i < learnFromCourse.length; i++) {
    var nameOfEach = learnFromCourse[i];
    console.log(nameOfEach);
}
*/


//23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে আউটপুট হি সে বে দে খাও

/*
var usePhone = ['Shymphony', 'Xiaomi', 'Samsung', 'Walton', 'iPhone'];
var i = 0;
while (i < usePhone.length) {
    usePhoneSingle = usePhone[i];
    console.log(usePhoneSingle);
    i++;
}
*/


//24) একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সেই জিনিস ক োড করে দে খাও
/*
for (var i = 30; i <= 86; i++) {
    if (i == 44) {
        break;
    }
    console.log(i);
}
*/

// 25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০ টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।

/*
var bookPrice = [100, 540, 340, 220, 200, 199, 700, 150];
for (var i = 0; i < bookPrice.length; i++) {
    var eachBookPrice = bookPrice[i];
    if (eachBookPrice >= 200) {
        continue;
    }
    console.log(eachBookPrice);
}
*/

// 26) Write a function called foo() which prints “foo” and a function called bar() which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output

/*
function foo() {
    console.log('Foo');
    function bar() {
        console.log('Bar');
    }
    bar();
}
foo();
*/
/*
function foo() {
    console.log('Foo');
    bar();
}
function bar() {
    console.log('Bar');
}
foo();
*/


// 27) Write a function called make_avg() which will take an three integers and return the average of those values.
/*
function make_avg(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    return average;
}
const averageMarks = make_avg(20, 30, 40);
console.log(averageMarks);
*/

// 28) Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/*
function avg_mark(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    var average = sum / numbers.length;
    return average;
}
const numbers = [8, 2, 14, 20];
const average = avg_mark(numbers);
console.log(average);
*/


// 4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

/*
//1
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let givenNumber = 169;
let checkEvenOdd = isEvenOrOdd(givenNumber);
console.log(checkEvenOdd);

//2
function odd_even(number) {
    if (number % 2 == 0) {
        console.log('This is even number');
    }
    else {
        console.log('This is odd number');
    }
}
odd_even(55);
*/


// 11 & 30) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.

/*
// Use if else
var signal = 'red';
if (signal == 'yellow') {
    console.log('You should stop.');
}
else if (signal == 'red') {
    console.log('If you try to cross the road, you may be in danger.');
}
else if (signal == 'green') {
    console.log('You should cross the road.');
}
else {
    console.log('Muri kine kha');
}


// Use switch case
var signal = '';

switch (signal) {
    case 'yellow':
        console.log('You should stop.');
        break;
    case 'green':
        console.log('You should cross the road.');
        break;
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;
    default:
        console.log('Muri kine khabo');
}
*/

// 31. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
/*
function multiplication(number) {
    for (let i = 1; i <= 10; i++) {
        var result = i * number;
        // console.log(result);
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplication(13);
*/


//32) একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

/*
function showName(name) {
    return name.toLowerCase();
    // return name.toUpperCase();
}
const userInput = 'BlackPiNK';
const lowercaseName = showName(userInput);
console.log(lowercaseName);
*/

//33) fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

/*
function fullName(first, last) {
    var showfullName = first + ' ' + last;
    return showfullName;
}
const showfullName = fullName('Hablu', 'Kanto');
console.log(showfullName);
*/

// 34) একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।
/*
//1
function square(number) {
    var squareNumber = number * number;
    console.log(squareNumber);
}
square(5);

//2
function square1(number1) {
    var squareNumber1 = number1 * number1;
    return squareNumber1;
}
const showSquareNumber = square1(5);
*/

// pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : এবং pepperoni প্রিন্ট করবা।
/*
const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2]);
*/

// 35,40) Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes

/*  .............Hour to Minute...............
function getMinute(hour) {
    const minute = hour * 60;
    return minute;
}
const givenHour = 24;
const myMinute = getMinute(givenHour);
console.log(myMinute);
*/

/*........... Hour to second............
function getSecond(hour) {
    const second = (hour * 60) * 60;
    return second;
}
const givenHour = 24;
const mySecond = getSecond(givenHour);
console.log(mySecond);
*/