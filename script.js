const  sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=> {
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})



function toggleTheme() {
  const documentElement = document.documentElement; // Targets <html>
  
  documentElement.classList.toggle('dark');
  
  // Save the theme preference in localStorage
  if (documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

// On page load, apply the correct theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

