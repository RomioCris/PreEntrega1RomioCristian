function calculateGPA() {
    let totalGrades = 0;
    let numberOfSubjects = 0;
    let grade;
    
    do {
        grade = parseFloat(prompt("Enter your grade for a subject (0-10):"));
        if (!isNaN(grade) && grade >= 0 && grade <= 10) {
            totalGrades += grade;
            numberOfSubjects++;
        } else {
            console.log("Invalid grade entered. Please enter a valid grade (0-10).");
        }
    } while (confirm("Do you want to enter another grade?")); // Ask user if they want to continue entering grades
    
    let gpa = totalGrades / numberOfSubjects;
    return gpa.toFixed(2); // Round GPA to 2 decimal places
}

let userGPA = calculateGPA();
console.log("Your GPA is: " + userGPA);