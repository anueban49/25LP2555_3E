const slimes = document.querySelectorAll(".slime");

slimes.forEach((slime) => {
  // slime.addEventListener("mouseenter", () => {
  //     slime.classList.add("select")
  //     slime.addEventListener("mouseleave", () => {
  //         slime.classList.remove("select")
  //     })
  // })
  slime.addEventListener("click", () => {
    slime.classList.add("select")
    const selected = document.querySelector("select");
    if (selected) {
        slime.addEventListener("dblclick", () => {
            slime.classList.remove("select")
        })
    } else {
        const character = document.querySelector("select");
        if (character) {
            console.log("character exists!")
        }
    }
  })


})
//dblclick function not working
//console.log char response not working