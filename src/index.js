const students = [
    { name: "Laura", age: 22, email: "laura@email.com" },
    { name: "Anna", age: 21, email: "anna@email.com" },
    { name: "Lluis", age: 28, email: "lluis@email.com" },
    { name: "Dani", age: 21, email: "dani@email.com" },
    { name: "Leo", age: 33, email: "leo@email.com" },
    { name: "Clara", age: 24, email: "clara@email.com" },
    { name: "Marc", age: 24, email: "marc@email.com" },
    { name: "Adriana", age: 28, email: "adriana@email.com" },
    { name: "Diego", age: 32, email: "diego@email.com" },
    { name: "Mar", age: 30, email: "mar@email.com" },
    { name: "Helena", age: 22, email: "helena@email.com" },
    { name: "Javi", age: 33, email: "javi@email.com" },
    { name: "Lorena", age: 34, email: "lorena@email.com" },
    { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];



const showStudents = () => {
  const studentsList = document.getElementById("studentsList")

  for (student of students) {
    const liStudent = document.createElement("li");
    //liStudent.innerText = `${student.name} - ${student.age} -${student.email} `;
    liStudent.innerHTML = `<article class="border border-lime-700 rounded-md bg-lime-300 p-2"><h4 class="font-bold"> ${student.name} <span class="text-white">${student.age}</span></h4><p class="bg-lime-200 text-center">${student.email}</p></article>`
    studentsList.appendChild(liStudent)
  }
}

const printBtn = document.getElementById("printButton")
printBtn.addEventListener("click", showStudents)