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
            <hr>
        </div>
    `;

    document.getElementById("studentForm").reset();
});
