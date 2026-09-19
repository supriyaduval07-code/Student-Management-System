document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let usn = document.getElementById("studentUSN").value;
    let branch = document.getElementById("studentBranch").value;
    let semester = document.getElementById("studentSemester").value;

    let studentList = document.getElementById("studentList");

    studentList.innerHTML += `
        <div>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>USN:</strong> ${usn}</p>
            <p><strong>Branch:</strong> ${branch}</p>
            <p><strong>Semester:</strong> ${semester}</p>
        <button onclick="this.parentElement.remove()">Delete 🗑️</button>
<button onclick="editStudent(this)">Edit ✏️</button>
         <hr>
        </div>
    `;

    document.getElementById("studentForm").reset();
});
document.getElementById("searchStudent").addEventListener("input", function() {
    let searchText = this.value.toLowerCase();
    let students = document.querySelectorAll("#studentList > div");

    students.forEach(function(student) {
        let studentText = student.textContent.toLowerCase();

        if (studentText.includes(searchText)) {
            student.style.display = "block";
        } else {
            student.style.display = "none";
        }
    });
});
