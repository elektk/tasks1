// task 1

function intersection(str) {
    let output = 0;
    const vowels = "aeioy";
  
    for (let input of str.toLowerCase()) {
      if (vowels.includes(input)) {
        output += 1;
      }
    }
    return output;
  }
  console.log(intersection("hello"));
  console.log(intersection("Hi, how are you?"));
  console.log(intersection("javascript"));
  
// task 2

function replacement(str) {
    let newstr = '';
    const vowels = "a";
  
    for (let input of str.toLowerCase()) {
      if (vowels.includes(input)) {
        newstr = str.replace(/a/gi, "#");
      }
    }
    return newstr;
  }
  console.log(replacement("apple"));
  console.log(replacement("Hi, how are you?"));
  console.log(replacement("javascript"));

// task 3

function uppercase(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }
  console.log(uppercase("hello world"));
  console.log(uppercase("hi, how are you?"));
  console.log(uppercase("javascript is fun"));

// task 4

 const char = [2, 5, 7, 3, 4, 4];
 const count = (char) => char.reduce((acc, num) => acc + num, 0);
 console.log(count(char));

// task 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= numbers.length ; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

// task 6

const getLength = x => x.map(str => str.length);

console.log(getLength(['one', 'sound', 'underground']));

// task 7

let uniq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 3, 7, 5, 9, 2, 4, 3, 6, 6, 8];

const uniqueAges = [...new Set(uniq.map(obj => obj))];
console.log(uniqueAges);