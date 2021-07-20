/*open and close toggle*/
const nav = document.querySelector ('header nav');
const toggle = document.querySelectorAll ('nav .toggle');


for (const element of toggle) {

    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    } );
}

/*when click in menu item hide the menu*/

const links = document.querySelectorAll ("nav ul li a");

for (const link of links){

    link.addEventListener('click', function (){
        nav.classList.remove('show');
    })
}


/* change the header when scroll*/

    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

function changeHeaderWhenScroll () {

    if (window.scrollY >= navHeight){
        //heigher than header's height
                header.classList.add ('scroll') 
        
            } else{
        //botton than header's height
                header.classList.remove ('scroll')
            }

}



/*testimonials sliders - carousel*/

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    pagination: {
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

});


//Scrollreveal: Show elements when scroll in the page

const scrollReveal = ScrollReveal ({
    origin:'top',
    distance:'30px',
    duration:700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header,#testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social `,
    {interval:100}
)

/*botton back to top (home)*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop () {   

    if(window.scrollY >= 1100) {
        backToTopButton.classList.add ('show');
    }
    else {
        backToTopButton.classList.remove('show')
    }

}

//active menu as the visible section
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection (){
    
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    
    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } 
        else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}




//When scroll, it will happen
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection ()
})

