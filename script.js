const mouseCursor = document.querySelector(".cursor");
let first = document.querySelector(".home");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

// const night = document.querySelector(".sun");

// dark = () =>{
//     night.classList.toggle('dark')
// }
// night.addEventListener('click', night)
