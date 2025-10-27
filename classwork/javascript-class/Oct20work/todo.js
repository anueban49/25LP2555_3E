const addBtn = document.getElementById("add");
const input = document.getElementById("input");

const content = [];

const listItems = (content) => {
    return `<div class="item">
    ${content}
    <button>Delete</button>
    </div>`;
}
addBtn.addEventListener("click", () => {
    const value = input.value;
    content.push(value);
    listItems.innerHTML = content;
})
