let nav_btn = document.querySelector('.nav-btn');
let nav = document.querySelector('.nav');
let nav_menu = document.querySelector('.nav-menu');
let nav_branding = document.querySelector('.nav__branding');

let nav_links = document.querySelector('.nav__links');

let nav_link = document.querySelectorAll('.nav__link');

let show_menu = false;

nav_btn.addEventListener('click', toggle_menu);

function toggle_menu()
{
  if(!show_menu)
  {
    nav_btn.classList.add('nav-btn--close');
    nav_btn.innerHTML = '&#9932;';
    nav.classList.add('nav--show');
    nav_branding.classList.add('nav__branding--show');
    nav_links.classList.add('nav__links--show');
    nav_link.forEach(link => link.classList.add('nav__link--show'));

    show_menu = true;
  }
  else
  {
    nav_btn.classList.remove('nav-btn--close');
    nav_btn.innerHTML = '&#9776;';
    nav.classList.remove('nav--show');
    nav_branding.classList.remove('nav__branding--show');
    nav_links.classList.remove('nav__links--show');
    nav_link.forEach(link => link.classList.remove('nav__link--show'));

    show_menu = false;
  }
}

let curr_date = new Date();
document.querySelector('.footer_year').innerHTML = curr_date.getFullYear();

let title = document.querySelector('title').innerText;
console.log(title);
let links = document.querySelectorAll('.nav__link');
console.log(links);

links.forEach((link) => {
  if(link.text == title)
  {
    link.classList.add('nav__link--current');
    console.log(link);
    console.log(title);
  }
})