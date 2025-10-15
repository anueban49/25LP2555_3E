// const boxes = document.querySelectorAll(".box");
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", () => {
//         if (boxes[i].style.backgroundColor === rgb(71, 83, 136) {
//         boxes[i].style.backgroundColor = "#202a57";
//     } 
//     else {
//         boxes[i].style.backgroundColor = "rgb(71, 83, 136)";
//     }

//     )});
    
// }

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        const currentColor = boxes[i].style.backgroundColor;

        if (boxes[i].style.backgroundColor === "#475388ff")
        {   boxes[i].style.backgroundColor = "#202a57";
        } else {
            boxes[i].style.backgroundColor = "#475388ff";
        }
    });
}
