// if1
// let number = parseInt(prompt("Enter a whole number:"));

// if (number > 0) {
//   number += 1;
// }

// console.log("Result:", number);

// if2
// let number = parseInt(prompt("Enter a whole number:"));

// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// } else {
//   number = 10;
// }

// console.log("Result:", number);

// if3
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));
// let number3 = parseInt(prompt("Enter the third whole number:"));

// let count = 0;
// if (number1 > 0) {
//   count++;
// }
// if (number2 > 0) {
//   count++;
// }
// if (number3 > 0) {
//   count++;
// }

// console.log("Number of positive numbers:", count);

// if4
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));

// if (number1 > number2) {
//   console.log(number1, "is larger");
// } else if (number2 > number1) {
//   console.log(number2, "is larger");
// } else {
//   console.log("Both numbers are equal");
// }

// if5
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));

// let min = Math.min(number1, number2);

// console.log("Smaller number:", min);

// if6
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));

// console.log("Larger number:", Math.max(number1, number2));
// console.log("Smaller number:", Math.min(number1, number2));

// if7
// let a = parseFloat(prompt("Enter the first real number:"));
// let b = parseFloat(prompt("Enter the second real number:"));

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// console.log("A =", a);
// console.log("B =", b);

// if8
// let a = parseInt(prompt("Enter the first whole number:"));
// let b = parseInt(prompt("Enter the second whole number:"));

// if (a !== b) {
//   a += b;
//   b = a;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log("A =", a);
// console.log("B =", b);

// if9
// let a = parseInt(prompt("Enter the first whole number:"));
// let b = parseInt(prompt("Enter the second whole number:"));

// if (a !== b) {
//   a = Math.max(a, b);
//   b = a;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log("A =", a);
// console.log("B =", b);

// if10
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));
// let number3 = parseInt(prompt("Enter the third whole number:"));

// let min = Math.min(number1, number2, number3);

// console.log

// if11
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));
// let number3 = parseInt(prompt("Enter the third whole number:"));

// let median = number1;

// if ((number2 > number1 && number2 < number3) || (number2 < number1 && number2 > number3)) {
//   median = number2;
// } else if ((number3 > number1 && number3 < number2) || (number3 < number1 && number3 > number2)) {
//   median = number3;
// }

// console.log("Median number:", median);

// if12
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));
// let number3 = parseInt(prompt("Enter the third whole number:"));

// let sum = number1 + number2 + number3;
// let max = Math.max(number1, number2, number3);
// let result = sum - max;

// console.log("Result:", result);

// if13
// let a = parseFloat(prompt("Enter the first real number:"));
// let b = parseFloat(prompt("Enter the second real number:"));
// let c = parseFloat(prompt("Enter the third real number:"));

// if (a < b && b < c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }

// console.log("A =", a);
// console.log("B =", b);
// console.log("C =", c);

// if14
// let a = parseFloat(prompt("Enter the first real number:"));
// let b = parseFloat(prompt("Enter the second real number:"));
// let c = parseFloat(prompt("Enter the third real number:"));

// if ((a < b && b < c) || (a > b && b > c)) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }

// console.log("A =", a);
// console.log("B =", b);
// console.log("C =", c);


// if15
// let number1 = parseInt(prompt("Enter the first whole number:"));
// let number2 = parseInt(prompt("Enter the second whole number:"));
// let number3 = parseInt(prompt("Enter the third whole number:"));
// let number4 = parseInt(prompt("Enter the fourth whole number:"));

// let count = 0;
// let order = '';

// if (number1 === number2) {
//   count++;
//   order += '1, 2 ';
// }
// if (number1 === number3) {
//   count++;
//   order += '1, 3 ';
// }
// if (number1 === number4) {
//   count++;
//   order += '1, 4 ';
// }
// if (number2 === number3) {
//   count++;
//   order += '2, 3 ';
// }
// if (number2 === number4) {
//   count++;
//   order += '2, 4 ';
// }
// if (number3 === number4) {
//   count++;
//   order += '3, 4 ';
// }

// console.log("Count:", count);
// console.log("Order:", order.trim());


// if16
// let x = parseFloat(prompt("Enter a real number:"));
// let result;

// if (x <= 0) {
//   result = -x;
// } else if (x < 2) {
//   result = x ** 


// case1
// let k = parseInt(prompt("Enter a whole number:"));
// let rating;

// switch (k) {
//   case 1:
//     rating = "yomon";
//     break;
//   case 2:
//     rating = "qoniqarsiz";
//     break;
//   case 3:
//     rating = "qoniqarli";
//     break;
//   case 4:
//     rating = "yahshi";
//     break;
//   case 5:
//     rating = "a'lo";
//     break;
//   default:
//     rating = "xato";
// }

// console.log("Baho natijasi:", rating);

// case2
// let month = parseInt(prompt("Enter the month number:"));
// let season;

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     season = "qish";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "bahor";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = "yoz";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = "kuz";
//     break;
//   default:
//     season = "xato";
// }

// console.log("Fasl:", season);

// case3
// let month = parseInt(prompt("Enter the month number:"));
// let days;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     days = 28;
//     break;
//   default:
//     days = "xato";
// }

// console.log("Kunlar soni:", days);


// case 4
// let unit = parseInt(prompt("Enter the unit number (1-5):"));
// let length = parseFloat(prompt("Enter the length in the given unit:"));
// let lengthInMeters;

// switch (unit) {
//   case 1:
//     lengthInMeters = length / 10;
//     break;
//   case 2:
//     lengthInMeters = length * 1000;
//     break;
//   case 3:
//     lengthInMeters = length;
//     break;
//   case 4:
//     lengthInMeters = length / 1000;
//     break;
//   case 5:
//     lengthInMeters = length / 100;
//     break;
//   default:
//     lengthInMeters = "xato";
// }

// console.log("Kesma uzunligi (metr):", lengthInMeters);


// case5
// let unit = parseInt(prompt("Enter the unit number (1-5):"));
// let weight = parseFloat(prompt("Enter the weight in the given unit:"));
// let weightInKilograms;

// switch (unit) {
//   case 1:
//     weightInKilograms = weight;
//     break;
//   case 2:
//     weightInKilograms = weight / 1000000;
//     break;
//   case 3:
//     weightInKilograms = weight / 1000;
//     break;
//   case 4:
//     weightInKilograms = weight * 1000;
//     break;
//   case 5:
//     weightInKilograms = weight * 100;
//     break;
//   default:
//     weightInKilograms = "xato";
// }

// console.log("Og'irlik (kilogram):", weightInKilograms);


// case6
// let day = parseInt(prompt("Enter the day:"));
// let month = parseInt(prompt("Enter the month:"));
// let year = parseInt(prompt("Enter the year:"));
// let daysInYear;

// let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

// switch (month) {
//   case 1:
//     daysInYear = day;
//     break;
//   case 2:
//     daysInYear = 31 + day;
//     break;
//   case 3:
//     daysInYear = isLeapYear ? 60 + day : 59 + day;
//     break;
//   case 4:
//     daysInYear = isLeapYear ? 91 + day : 90 + day;
//     break;
//   case 5:
//     daysInYear = isLeapYear ? 121 + day : 120 + day;
//     break;
//   case 6:
//     daysInYear = isLeapYear ? 152 + day : 151 + day;
//     break;
//   case 7:
//     daysInYear = isLeapYear ? 182 + day : 181 + day;
//     break;
//   case 8:
//     daysInYear = isLeapYear ? 213 + day : 212 + day;
//     break;
//   case 9:
//     daysInYear = isLeapYear ? 244 + day : 243 + day;
//     break;
//   case 10:
//     daysInYear = isLeapYear ? 274 + day : 273 + day;
//     break;
//   case 11:
//     daysInYear = isLeapYear ? 305 + day : 304 + day;
//     break;
//   case 12:
//     daysInYear = isLeapYear ? 335 + day : 334 + day;
//     break;
//   default:
//     daysInYear = "xato";
// }

// console.log("Kunlar soni:", daysInYear);


// case7
// let day = parseInt(prompt("Enter the day:"));
// let month = parseInt(prompt("Enter the month:"));
// let year = parseInt(prompt("Enter the year:"));
// let nextDay;
// let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

// switch (month) {
//   case 1:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 2:
//     if (isLeapYear) {
//       if (day == 29) {
//         nextDay = 1;
//       } else {
//         nextDay = day + 1;
//       }
//     } else {
//       if (day == 28) {
//         nextDay = 1;
//       } else {
//         nextDay = day + 1;
//       }
//     }
//     break;
//   case 3:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 4:
//     if (day == 30) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 5:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 6:
//     if (day == 30) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 7:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 8:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 9:
//     if (day == 30) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 10:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 11:
//     if (day == 30) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   case 12:
//     if (day == 31) {
//       nextDay = 1;
//     } else {
//       nextDay = day + 1;
//     }
//     break;
//   default:
//     nextDay = "xato";
// }

// console.log("Keyingi kun:", nextDay);


// case8
// let direction = prompt("Enter the direction (s/j/q/g):");
// let command = parseInt(prompt("Enter the command (0/1/2):"));
// let newDirection;

// switch (direction) {
//   case "s":
//     if (command == 0) {
//       newDirection = "s";
//     } else if (command == 1) {
//       newDirection = "g";
//     } else if (command == 2) {
//       newDirection = "q";
//     } else {
//       newDirection = "xato";
//     }
//     break;
//   case "j":
//     if (command == 0) {
//       newDirection = "j";
//     } else if (command == 1) {
//       newDirection = "q";
//     } else if (command == 2) {
//       newDirection = "g";
//     } else {
//       newDirection = "xato";
//     }
//     break;
//   case "q":
//     if (command == 0) {
//       newDirection = "q";
//     } else if (command == 1) {
//       newDirection = "s";
//     } else if (command == 2) {
//       newDirection = "j";
//     } else {
//       newDirection = "xato";
//     }
//     break;
//   case "g":
//     if (command == 0) {
//       newDirection = "g";
//     } else if (command == 1) {
//       newDirection = "j";
//     } else if (command == 2) {
//       newDirection = "s";
//     } else {
//       newDirection = "xato";
//     }
//     break;
//   default:
//     newDirection = "xato";
// }

// console.log("Yangi yo'nalish:", newDirection);


// case9
// let value = parseInt(prompt("Enter the card value (6-14):"));
// let type = parseInt(prompt("Enter the card type (1-4):"));
// let cardName;

// switch (value) {
//   case 6:
//     cardName = "olti";
//     break;
//   case 7:
//     cardName = "yetti";
//     break;
//   case 8:
//     cardName = "sakkiz";
//     break;
//   case 9:
//     cardName = "to'qqiz";
//     break;
//   case 10:
//     cardName = "o'n";
//     break;
//   case 11:
//     cardName = "valet";
//     break;
//   case 12:
//     cardName = "qirli";
//     break;
//   case 13:
//     cardName = "qaroq";
//     break;
//   case 14:
//     cardName = "tuz";
//     break;
//   default:
//     cardName = "xato";
// }

// switch (type) {
//   case 1:
//     cardName += " pik";
//     break;
//   case 2:
//     cardName += " chiroq";
//     break;
//   case 3:
//     cardName += " qizil";
//     break;
//   case 4:
//     cardName += " kross";
//     break;
//   default:
//     cardName += " xato";
// }

// console.log("Karta:", cardName);


// case10
// let problemNumber = parseInt(prompt("Enter a number between 10 and 40:"));
// let problemName;

// switch (problemNumber) {
//   case 10:
//     problemName = "o`n";
//     break;
//   case 11:
//     problemName = "o`n bir";
//     break;
//   case 12:
//     problemName = "o`n ikki";
//     break;
//   case 13:
//     problemName = "o`n uch";
//     break;
//   case 14:
//     problemName = "o`n to`rt";
//     break;
//   case 15:
//     problemName = "o`n besh";
//     break;
//   case 16:
//     problemName = "o`n olti";
//     break;
//   case 17:
//     problemName = "o`n yetti";
//     break;
//   case 18:
//     problemName = "o`n sakkiz";
//     break;
//   case 19:
//     problemName = "o`n to`qqiz";
//     break;
//   case 20:
//     problemName = "yigirma";
//     break;
//   case 21:
//     problemName = "yigirma bir";
//     break;
//   case 22:
//     problemName = "yigirma ikki";
//     break;
//   case 23:
//     problemName = "yigirma uch";
//     break;
//   case 24:
//     problemName = "yigirma to`rt";
//     break;
//   case 25:
//     problemName = "yigirma besh";
//     break;
//   case 26:
//     problemName = "yigirma olti";
//     break;
//   case 27:
//     problemName = "yigirma yetti";
//     break;
//   case 28:
//     problemName = "yigirma sakkiz";
//     break;
//   case 29:
//     problemName = "yigirma to`qqiz";
//     break;
//   case 30:
//     problemName = "o`ttiz";
//     break;
//   case 31:
//     problemName = "o`ttiz bir";
//     break;
//   case 32:
//     problemName = "o`ttiz ikki";
//     break;
//   case 33:
//     problemName = "o`ttiz uch";
//     break;
//   case 34:
//     problemName = "o`ttiz to`rt";
//     break;
//   case 35:
//     problemName = "o`ttiz besh";
//     break;
//   case 36:
//     problemName = "o`ttiz olti";
//     break;
//   case 37:
//     problemName = "o`ttiz yetti";
//     break;
//   case 38:
//     problemName = "o`ttiz sakkiz";
//     break;
//   case 39:
//     problemName = "o`ttiz to`qqiz";
//     break;
//   case 40:
//     problemName = "qirq";
//     break;
//   default:
//     problemName = "xato";
// }

// console.log("Masala:", problemName);

// case11
// let number = parseInt(prompt("Enter a number between 100 and 999:"));
// let numberName = "";

// let hundreds = Math.floor(number / 100);
// let tens = Math.floor((number % 100) / 10);
// let ones = number % 10;

// switch (hundreds) {
//   case 1:
//     numberName += "bir yuz";
//     break;
//   case 2:
//     numberName += "ikki yuz";
//     break;
//   case 3:
//     numberName += "uch yuz";
//     break;
//   case 4:
//     numberName += "to'rt yuz";
//     break;
//   case 5:
//     numberName += "besh yuz";
//     break;
//   case 6:
//     numberName += "olti yuz";
//     break;
//   case 7:
//     numberName += "yetti yuz";
//     break;
//   case 8:
//     numberName += "sakkiz yuz";
//     break;
//   case 9:
//     numberName += "to'qqiz yuz";
//     break;
// }

// if (tens === 1) {
//   switch (ones) {
//     case 0:
//       numberName += " o`n";
//       break;
//     case 1:
//       numberName += " o`n bir";
//       break;
//     case 2:
//       numberName += " o`n ikki";
//       break;
//     case 3:
//       numberName += " o`n uch";
//       break;
//     case 4:
//       numberName += " o`n to`rt";
//       break;
//     case 5:
//       numberName += " o`n besh";
//       break;
//     case 6:
//       numberName += " o`n olti";
//       break;
//     case 7:
//       numberName += " o`n yetti";
//       break;
//     case 8:
//       numberName += " o`n sakkiz";
//       break;
//     case 9:
//       numberName += " o`n to`qqiz";
//       break;
//   }
// } else {
//   switch (tens) {
//     case 2:
//       numberName += " yigirma";
//       break;
//     case 3:
//       numberName += " o`ttiz";
//       break;
//     case 4:
//       numberName += " qirq";
//       break;
//     case 5:
//       numberName += " ellik";
//       break;
//     case 6:
//       numberName += " oltmish";
//       break;
//     case 7:
//       numberName += " yetmish";
//       break;
//     case 8:
//       numberName += " sakson";
//       break;
//     case 9:
//       numberName += " to'qson";
//       break;
//   }

//   switch (ones) {
//     case 1:
//       numberName += " bir";
//       break;
//     case 2:
//       numberName += " ikki";
//       break;
//     case 3:
//       numberName += " uch";
//       break;
//     case 4:
//       numberName += " to`rt";
//       break;
//     case 5:
//       numberName += " besh";
//       break;
//     case 6:
//       numberName += " olti";
//       break;
//     case 7:
//       numberName += " yetti";
//       break;
//     case 8:
//       numberName += " sakkiz";
//       break;
//     case 9:
//       numberName += " to`qqiz";
//       break;
//   }
// }

// console.log("Number Name:", numberName);

// case 12
// let year = parseInt(prompt("Enter a year:"));
// let animal, color;

// switch (year % 12) {
//   case 0:
//     animal = "sichqon";
//     break;
//   case 1:
//     animal = "sigir";
//     break;
//   case 2:
//     animal = "yo`lbars";
//     break;
//   case 3:
//     animal = "quyon";
//     break;
//   case 4:
//     animal = "ajdar";
//     break;
//   case 5:
//     animal = "ilon";
//     break;
//   case 6:
//     animal = "ot";
//     break;
//   case 7:
//     animal = "qo`y";
//     break;
//   case 8:
//     animal = "maymun";
//     break;
//   case 9:
//     animal = "tovuq";
//     break;
//   case 10:
//     animal = "it";
//     break;
//   case 11:
//     animal = "to`ngiz";
//     break;
// }

// switch (year % 5) {
//   case 0:
//     color = "yashil";
//     break;
//   case 1:
//     color = "qizil";
//     break;
//   case 2:
//     color = "sariq";
//     break;
//   case 3:
//     color = "oq";
//     break;
//   case 4:
//     color = "qora";
//     break;
// }

// console.log("Year:", color, animal, "yili");
