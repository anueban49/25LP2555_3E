const addBtn = document.getElementById("add");
let listItems = document.getElementById("listItems");
const input = document.getElementById("input");
let content = [];
addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value === "") return;
    content.push(value);
    listItems.innerHTML = "";
    content.forEach(value => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = 
        '<input id="checkbox" type="checkbox" data-index=${index}/><p class="task">${value}</p><button id="deleteBtn" data-index=${index}>Delete</button>';
        listItems.appendChild(div);
    })
    input.value = "";
})
const item = document.getElementById("item");
const checkbox = document.getElementById("checkbox");
const deleteBtn = document.getElementById("deleteBtn");
if (checkbox) {
    checkbox.addEventListener("change", () => {
        console.log("checkbox clicked!");
    })
}
if (item) {
    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", () => {
    item.remove();
})
}
listItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn") {
        const index = 
    })
})



// checkbox.addEventListener("click", => {

// })
// const showAllBtn = document.getElementById("showAllBtn");
// const showAll = document.getElementsByClassName("showAll")
// showAllBtn.addEventListener("click", => {
//     listItems.style.display = document.getElementById("showAll");
// })
