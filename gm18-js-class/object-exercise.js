let classroom = {
  students : ['A', 'B', 'C'],
  teachers : ['Payton'],
  numTables : 5,
  numSeats : 14,
};

console.log( classroom );

classroom.numTables--;
classroom.numSeats++;

console.log( classroom );

classroom.students = classroom.students.filter(
  student => (student !== 'Payton')
);

classroom.teachers = classroom.teachers.filter(
  teacher => (teacher !== 'Payton')
);

console.log( classroom );

classroom.teachers = ['Mojo Jojo'];

console.log( classroom );
