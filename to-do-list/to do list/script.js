const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Type your text first")
        return;
    };
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
    li.append(deleteBtn);
    taskList.append(li);
    taskInput.value = "";
})






// addBtn.addEventListener("click", function(){
//     const taskText = taskInput.value.trim();
//     if (taskText === "") {
//         alert("Type your text first!");
//         return;
//     }
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");


//     deleteBtn.addEventListener("click", function() {
//     li.remove();
//     });
    
//     li.append(deleteBtn);
//     taskList.append(li);
//     taskInput.value = "";
// });

