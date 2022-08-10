// 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.

/*
function findLeapYear(years) {
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        console.log(index, element);
    }
    return years;
}
function getLeapYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const givenYear = [2023, 2024, 2025, 2026, 2028, 2030];
const leapYear = findLeapYear(givenYear);
console.log(leapYear);
const onlyLeapYear = getLeapYear(leapYear);
console.log(onlyLeapYear);
*/


// ...................Single Way ........................
/*
function findLeapYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if ((element % 4 == 0) && (element % 100 != 0) || (element % 400 == 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const givenYear = [2023, 2024, 2025, 2026, 2028, 2030];
const leapYear = findLeapYear(givenYear);
console.log(leapYear);
*/


// 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ] as the input parameter and will return the sum of the odd numbers.
/*
function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function findOddSum(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const givenArray = [5, 7, 8, 10, 45, 30];
const oddNumbers = findOddSum(givenArray);
console.log(oddNumbers);
const oddNumberSum = sumOfArray(oddNumbers);
console.log(oddNumberSum);
*/

// 38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন করবে ।

/*
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const givenYear = 2023;
const checkLeapYear = isLeapYear(givenYear);
console.log(givenYear, "is This Year LeapYear?", checkLeapYear);
*/

// 39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন করবে আর Odd হলে false রি টার্ন করবে
/*
function isEvenOrOdd(age) {
    if (age % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let givenNumber = 23;
let checkEvenOdd = isEvenOrOdd(givenNumber);
console.log(checkEvenOdd);
*/


//44) তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

/*
function getFahrenheit(celcius) {
    const fahrenheit = (celcius * 9 / 5) + 32;
    return fahrenheit;
}
const fahrenheitResult = getFahrenheit(30);
console.log(fahrenheitResult);


// 45) একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
function getCelcius(fahrenheit) {
    const celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}
const celciusResult = getCelcius(86);
console.log(celciusResult);
*/


// 46) কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

//using if else
/*
function findGrade(marks) {
    if (marks >= 80) {
        console.log('Grade is A+');
    }
    else if (marks >= 70) {
        console.log('Grade is A');
    }
    else if (marks >= 60) {
        console.log('Grade is B');
    }
    else if (marks >= 50) {
        console.log('Grade is C');
    }
    else if (marks >= 40) {
        console.log('Grade is D');
    }
    else {
        console.log('Grade is F');
    }
}
const givenMark = 78;
const finalGrade = findGrade(givenMark);
*/

/*
//using switch case
function findGrade(marks) {
    switch (true) {
        case marks >= 80:
            console.log('Grade is A+');
            break;
        case marks >= 70:
            console.log('Grade is A');
            break;
        case marks >= 60:
            console.log('Grade is B');
            break;
        case marks >= 50:
            console.log('Grade is C');
            break;
        case marks >= 40:
            console.log('Grade is D');
            break;
        default:
            console.log('Grade is F');

    }
}
const givenMark = 78;
const finalGrade = findGrade(givenMark);
*/

// 47) সুদে র হি সাব করবে । জাস্ট হি সাব কে মনে করতে হয়। সে ই চি ন্তায় করবে । সুদ ভাল ো না খারাপ সে টা এখন চি ন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলর্মু া থাকলে সে টা কি ভাবে ক োড এ লি খতে হয় সে ই এঙ্গে ল থে কে করার চে ষ্টা কর ো।
/*
function calculteInterest(principle, rate, time) {
    const toalAmount = (principle * rate * time) / 100;
    return toalAmount;
}
const money = calculteInterest(10000, 5, 5);
console.log(money);
*/

// 48) একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
/*
function findMinimum(arr) {
    let minimum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        const element = arr[index];
        if (element < minimum)
            minimum = element;
    }
    return minimum;
}
const givenArray = [30, 40, 12, 34, 11, 7, 40, 70];
const minimumValue = findMinimum(givenArray);
console.log(minimumValue);
*/