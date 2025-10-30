const role = document.querySelectorAll("button");
const Xrole = document.getElementById("roleX");
const Orole = document.getElementById("roleO");
const roleSelect = document.querySelector(".roleSelect");
role.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.contains(Xrole)) {
      console.log("user is X");
    } else if (button.contains(Orole)) {
      console.log("user is O");
    }
    const disApear = setTimeOut(() => {
        roleSelect.innerHTML = `<div>
        <h2>Role chosen!</h2></div>`;
    }, 1000) 
  });
});
