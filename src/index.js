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
  const items = document.querySelectorAll("li")
  for (item of items) {
    item.remove()
  }
  let i = 0;
  for (student of students) {
    i++
    const liStudent = document.createElement("li");
    liStudent.innerHTML = `<article id ="student${i}" draggable="true" class="border border-lime-700 rounded-md bg-lime-300 p-2"><h4 class="font-bold"> ${student.name} <span class="text-white">${student.age}</span></h4><a href ="mailto: ${student.email}" class="bg-lime-200 text-center italic text-xs">${student.email}</a></article>`
    studentsList.appendChild(liStudent)
  }


/* DRAG AND DROP
*/

const articles = document.querySelectorAll("article");

articles.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    item.classList.add("bg-slate-200");
    event.dataTransfer.setData("id", item.id);
    console.log("dragstart:", item.id);
  });
  item.addEventListener("dragend", () => {
    console.log("dragend:", item.id);
    item.classList.remove("bg-slate-200");
  });
});


const approvedArea = document.getElementById("approvedArea")
approvedArea.addEventListener("dragover", (event) => {
       event.preventDefault() 
       console.log("Drag Over approvedArea")
})
approvedArea.addEventListener("drop" , (event) => {
  
  const idItem = event.dataTransfer.getData("id");
  const item = document.getElementById(idItem)
  item.classList.add("bg-white")
  console.log("Drop approvedArea", item)
  approvedArea.appendChild(item)

})

const suspendedArea = document.getElementById("suspendedArea")
suspendedArea.addEventListener("dragover", (event) => {
       event.preventDefault() 
       console.log("Drag Over suspendedArea")
})
suspendedArea.addEventListener("drop" , (event) => {
  
  const idItem = event.dataTransfer.getData("id");
  const item = document.getElementById(idItem)
  item.classList.add("bg-white")
  console.log("Drop approvedArea", item)
  suspendedArea.appendChild(item)

})

// dropAreas.forEach(area => {
//     console.log("dropArea", e )
//     area.addEventListener("dragover", (event) => {
//        event.preventDefault() 
//        console.log("Drag Over")
//        section.classList.add("bg-lime-400")
//     });

//     // section.addEventListener("dragleave", () => {
//     //   section.classList.remove("bg-lime-400")
//     // })

//     // section.addEventListener("drop", (event) => {
//     //   const idItem = event.dataTransfer.getData("id");
//     //   section.classList.remove("bg-slate-400")
//     //   // console.log("Drop", section.id, "item: ", idItem);
//     //   const item = document.getElementById(idItem)
//     //   section.appendChild(item)
//     // });
//   });





}

const cleanStudents = () => {
  const items = document.querySelectorAll("li")
  for (item of items) {
    item.remove()
  }
}

const printBtn = document.getElementById("printButton")
printBtn.addEventListener("click", showStudents)

const cleanBtn = document.getElementById("cleanButton")
cleanBtn.addEventListener("click", cleanStudents)


