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
        div.attributes = "data-category";
        div.innerHTML = '<input class="checkbox" type="checkbox"/> <p class="task">' + value + '</p>'
        listItems.appendChild(div);
    })
    input.value = "";
})
const taskItem = {
    checkbox: false,
    category: "Incomplete",
}
const checkbox = document.getElementsByClassName("checkbox");
if (checkbox !== null) {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            item.setAttribute("data-category", "done");
        } else {
            i
        }
    })
}
// checkbox.addEventListener("click", => {

// })
// const showAllBtn = document.getElementById("showAllBtn");
// const showAll = document.getElementsByClassName("showAll")
// showAllBtn.addEventListener("click", => {
//     listItems.style.display = document.getElementById("showAll");
// })
