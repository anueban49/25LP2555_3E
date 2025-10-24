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
        div.setAttribute("data-category", "Incomplete");
        div.innerHTML = '<div class="checkbox"></div> <p class="task">' + value + '</p><div class = "deleteBtn" >Delete</div>'
        listItems.appendChild(div);
    })
    input.value = "";
})
listItems.addEventListener("click", (event => {
    if (event.target.classList.contains("checkbox")) {
        checkbox.addEventListener("click", () => {
            // make the status "complete"
            div.setAttribute("data-category", "complete")
            // text line through change
            
        })
    }
}))

const checkbox = document.querySelectorAll(".deleteBtn");
checkbox.forEach()






// const filterBtn = document.querySelectorAll(".categories")

// listItems.addEventListener("click", (event) => {
//     if (event.target.classList.contains('item')) {
//         const task = event.target.querySelector("p");
//         if (task) {
//         task.toggle('doneState')}
//     }
// })



// // })
// const showAllBtn = document.getElementById("showAllBtn");
// // const showAll = document.getElementsByClassName("showAll")
// showAllBtn.addEventListener("click", () => {
//     console.log("button clicked!")
// })
