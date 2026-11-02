const fs = require("fs");

const file = "attendance.txt";

// Add student
function addStudent(name) {
    fs.appendFileSync(file, name + "\n");
    console.log(name + " added");
}

// Show students
function showStudents() {
    const data = fs.readFileSync(file, "utf8");

    console.log("Attendance List:");
    console.log(data);
}

// Update student
function updateStudent(oldName, newName) {
    let data = fs.readFileSync(file, "utf8");

    data = data.replace(oldName, newName);

    fs.writeFileSync(file, data);

    console.log("Student name updated");
}

// Delete student
function deleteStudent(name) {
    let data = fs.readFileSync(file, "utf8");

    let students = data.split("\n");

    students = students.filter(student => student !== name);

    fs.writeFileSync(file, students.join("\n"));

    console.log("Student deleted");
}


// Add students
addStudent("Gunjan");
addStudent("Harshit");
addStudent("Rahul");

// Display
showStudents();

// Update
updateStudent("Rahul", "Aman");

showStudents();

// Delete
deleteStudent("Harshit");

showStudents();