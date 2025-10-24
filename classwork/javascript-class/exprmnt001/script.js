
const container = document.querySelector(".container");


const leftScroll = document.getElementById("leftScroll");
const rightScroll = document.getElementById("rightScroll");

const gallery = document.getElementById("carousel");
const galleryBox = Array.from(gallery.children);
galleryBox.forEach((item, index) => {
  item.arrayIndex = index;
})
console.log(galleryBox);
const item =document.querySelectorAll(".item");
function unhideElement() {
  if (buttonLeft.clicked) {
    for (i = 0; i < arr.length; i++) {
      arr[i].style.display = ("block");
    } 
  }
}