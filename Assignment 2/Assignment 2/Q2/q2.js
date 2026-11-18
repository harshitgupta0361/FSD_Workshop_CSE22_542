const fs = require('fs');

const file = 'attendance.txt';

// Add student
function addStudent(name) {
    fs.appendFileSync(file, name + '\n');
    console.log(name + " added successfully.");
}

// Show all students
function showStudents() {
    if (!fs.existsSync(file)) {
        console.log("No attendance records found.");
        return;
    }

    const data = fs.readFileSync(file, 'utf8');
    console.log("Attendance List:\n" + data);
}

// Update student name
function updateStudent(oldName, newName) {
    if (!fs.existsSync(file)) return;

    let students = fs.readFileSync(file, 'utf8')
        .split('\n')
        .filter(name => name !== '');

    const index = students.indexOf(oldName);

    if (index !== -1) {
        students[index] = newName;
        fs.writeFileSync(file, students.join('\n') + '\n');
        console.log("Name updated successfully.");
    } else {
        console.log("Student not found.");
    }
}

// Delete student
function deleteStudent(name) {
    if (!fs.existsSync(file)) return;

    let students = fs.readFileSync(file, 'utf8')
        .split('\n')
        .filter(student => student !== '' && student !== name);

    fs.writeFileSync(file, students.join('\n'));

    console.log("Student deleted successfully.");
}

// Function calls
addStudent("Harshit");
addStudent("Rahul");

showStudents();

updateStudent("Rahul", "Aman");

showStudents();

deleteStudent("Harshit");

showStudents();