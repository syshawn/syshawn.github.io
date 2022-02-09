/* Nav-bar Function */
const navBar = document.getElementById('nav-bar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /* Show Nav-bar */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navBar.classList.add('show-list')
        })
    }

    /* Close Nav-bar */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navBar.classList.remove('show-list')
        })
    }

    /* Remove */
    const navLink = document.querySelectorAll('.nav_link')

        function linkAction(){
            const navBar = document.getElementById('nav-bar')
            navBar.classList.remove('show-list')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))