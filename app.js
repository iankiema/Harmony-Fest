const mySidebar = document.querySelector('.mysidebar');
const menuOpen = document.querySelector('#menu-open');
const closeBtn = document.querySelector('#close-btn');
const menuLinks = document.querySelector('#menu-link');

function openNav() {
    if (mySidebar.style.display === ("none")){
         mySidebar.style.display = ("block");
         console.log("clicked")
    } else {
        mySidebar.style.display = 'none'
    }


}

function closeNav() {
    mySidebar.style.width = "none";
}

menuOpen.addEventListener('click',openNav);
closeBtn.addEventListener('click',closeNav);
menuLinks.addEventListener('click',closeNav);

