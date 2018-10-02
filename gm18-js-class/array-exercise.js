let students = [1,3,2,4,3,23,3,27,4,4,4,5,1,2,3,2,4,3,5,4,6,5,4,3,2,4,3,5,4,7,6,8,7,10];

students.push( 13 );
console.log( students );

students.shift();
console.log( students );

students.pop();
console.log( students );

students.splice( Math.ceil( (students.length / 2) - 1 ), 1 );
console.log( students );

console.log( students.length );

students.sort();

console.log( students );
