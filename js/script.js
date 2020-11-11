
//toggle hamburger
const header = document.querySelector('.header')
const mainNav = document.querySelector('.nav-items');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-toggleShow')
    mainNav.style.textAlign = 'center'
    mainNav.classList.toggle('transparent')

    document.querySelector('.navbar').classList.toggle('navbar-dark')

    if(mainNav.classList.contains('nav-toggleShow')) {
        navToggle.src = "images/icon-close.svg";    
    }else {
        navToggle.src = "images/icon-hamburger.svg";
    }

});


//Accordion
let question = document.querySelectorAll('.question')
let details = document.querySelectorAll('.details')


//toggle display for accordion details 
const toggleQuestions = (e) => {
    details.forEach((detail) => {
        if (detail.previousElementSibling === e.target) {
            detail.classList.toggle('active')
            
        }
    })
}

question.forEach((accord) => {
   let accordion = accord.firstElementChild;
   accordion.addEventListener('click', toggleQuestions)

   //toggle arrow-up or arrow-down on click
   accordion.addEventListener('click', () => {
        accordion.classList.toggle('accordion-collapse')
   })
   
})

// tab display
tab1 = document.querySelector('#tab1')
tab2 = document.querySelector('#tab2')
tab3 = document.querySelector('#tab3')

const firstTab = document.querySelector('#first-tab')
const secondTab = document.querySelector('#second-tab')
const thirdTab = document.querySelector('#third-tab')


const openTabOne = () => {
    tab1.style.display = 'grid';
    tab2.style.display = 'none';
    tab3.style.display = 'none';

    firstTab.style.borderBottom = '5px solid hsl(0, 94%, 66%)';
    secondTab.style.borderBottom = 'none';
    thirdTab.style.borderBottom = 'none';
} 

const openTabTwo = () => {
    tab1.style.display = 'none';
    tab2.style.display = 'grid';
    tab3.style.display = 'none';

    firstTab.style.borderBottom = 'none';
    secondTab.style.borderBottom = '5px solid hsl(0, 94%, 66%)';
    thirdTab.style.borderBottom = 'none';
}

const openTabThree = () => {
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    tab3.style.display = 'grid';

    firstTab.style.borderBottom = 'none';
    secondTab.style.borderBottom = 'none';
    thirdTab.style.borderBottom = '5px solid hsl(0, 94%, 66%)';
}


//tab1
firstTab.addEventListener('click', openTabOne)

//tab2
secondTab.addEventListener('click', openTabTwo)

//tab 3
thirdTab.addEventListener('click', openTabThree)


//contact us email validation

let contactMail = document.querySelector('#contact-mail')
let small = document.querySelector('.small')
const formInput = document.querySelector('.form-input')

const validateContactMail = (email) => {
    let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email.value){
        formInput.style.border = '1px solid hsl(0, 94%, 66%)'
        small.classList.remove('success')
        small.classList.toggle('small-bg')
        small.textContent = "email cannot be empty";
        return false
    }
    else if(email.value.match(mail)){
        formInput.style.border = 'none'
        small.classList.toggle('small-bg')
        small.classList.add('success')
        small.textContent = "Success!";
        return true;
    }
    else{
        formInput.style.border = '1px solid hsl(0, 94%, 66%)'
        small.classList.remove('success')
        small.classList.add('small-bg')   
        small.textContent = "whoops! make sure it's an email";
        return false
    }
}
