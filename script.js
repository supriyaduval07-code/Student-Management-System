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
function editStudent(button) {
    let student = button.parentElement;

    let name = student.querySelector("p:nth-child(1)").textContent.replace("Name:", "").trim();
    let usn = student.querySelector("p:nth-child(2)").textContent.replace("USN:", "").trim();
    let branch = student.querySelector("p:nth-child(3)").textContent.replace("Branch:", "").trim();
    let semester = student.querySelector("p:nth-child(4)").textContent.replace("Semester:", "").trim();

    document.getElementById("studentName").value = name;
    document.getElementById("studentUSN").value = usn;
    document.getElementById("studentBranch").value = branch;
    document.getElementById("studentSemester").value = semester;

    student.remove();
}
