const hamburger = document.querySelector("#header .header nav .hamburger");
const hamburger_menu = document.querySelector("#header .header nav ul")
const menu_item = document.querySelectorAll("#header .header nav ul a");
const header = document.querySelector("#header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburger_menu.classList.toggle("active");    
})

menu_item.forEach(item => {
    item.addEventListener("click" ,()=> {
        hamburger.classList.toggle("active");
        hamburger_menu.classList.toggle("active");
    });
});

document.addEventListener("scroll" , ()=> {
    let scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#393E46";
    }else {
        header.style.backgroundColor = "transparent";
    }
});