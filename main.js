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


/* Qualification Switch-Tab Function */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
        
    tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')

                tabs.forEach(tab =>{
                    tab.classList.remove('qualification_active')
                })
                tab.classList.add('qualification_active')
            })
        })

/* Sweeper Function */
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });