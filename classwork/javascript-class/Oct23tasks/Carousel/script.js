//pseudo code
//elements to get:
// types/methods:
//operations:

const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const gallery = document.getElementById("imageGallery");
const item = document.querySelectorAll(".page");

const galleryBox = Array.from(gallery.children);

galleryBox.forEach((item, index) => {
  item.arrayIndex = index;
  console.log(index);
});

console.log(galleryBox);

let i = 0;

buttonLeft.addEventListener("click", () => {
  // i++;
  // gallery.style.transform = `translateX(${i * 300}px)`;
  i = Math.max(i - 1, 0); // prevent going below 0
  gallery.style.transform = `translateX(-${i * 300}px)`;
});
buttonRight.addEventListener("click", () => {
  // i--;
  // gallery.style.transform = `translateX(${i * -300}psx)`;
  i = Math.min(i + 1, galleryBox.length); // prevent going past last item
  gallery.style.transform = `translateX(-${i * 300}px)`;
});
const selection = document.querySelector(".observer");




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry.target.classList.add("scale", entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("scale")
    } else {
      entry.target.classList.remove("scale")
    }
  });
}, {
  root: document.querySelector('.observer'), 
  threshold: 0.5 
});

document.querySelectorAll('.page').forEach(page => {
  observer.observe(page);
});


