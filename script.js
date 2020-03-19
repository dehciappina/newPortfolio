const preBg = document.querySelector('#pre_bg')
const Im = document.querySelector('h1 div span')
const firstName = document.querySelector('h1 > span > span:first-child')
const secName = document.querySelector('h1 > span > span:last-child')

const introSec = document.querySelector('#intro')

const subH1 = document.querySelector('#sub_h1')

const topLine = document.querySelector('#top_line')
const botLine = document.querySelector('#bottom_line')

const fh3 = document.querySelector('#fh3')
const sh3 = document.querySelector('#sh3')

const learnMore = document.querySelector('#learn_more')
const exitBg = document.querySelector('#exit_bg')

const introBg = document.querySelector('#intro_bg')

const contactBts = document.querySelector('#contact_bts')

const emailBt = document.querySelector('#email_bt')
const emailCtnr = document.querySelector('#email_ctnr')
const outForm = document.querySelector('#out_form')

const whatsBt = document.querySelector('#whats_bt')
const gitBt = document.querySelector('#git_bt')
const linkedinBt = document.querySelector('#linkedin_bt')

const backTop = document.querySelector('#backtop')

let alreadySkipped = false;

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        let transitionState = 'opacity 1s ease-in';

        introSec.style.height = 'calc(' + window.innerHeight + "px - 1.4rem)";
        window.addEventListener('resize', function() {
            introSec.style.height = 'calc(' + window.innerHeight + "px - 1.4rem)";
        });
        
        preBg.style.transition = 'transform 4s cubic-bezier(0.2, 0.2, 0.1, 1) 0s';
        Im.style.transition = transitionState;
        firstName.style.transition = transitionState;
        secName.style.transition = transitionState;
        contactBts.style.transition = transitionState;
        subH1.style.transition = transitionState;
        fh3.style.transition = transitionState;
        emailBt.style.transition = transitionState;
        sh3.style.transition = transitionState;
        whatsBt.style.transition = transitionState;
        learnMore.style.transition = transitionState;
        gitBt.style.transition = transitionState;
        linkedinBt.style.transition = transitionState;
        
        introBg.style.opacity = 0;

        preBg.style.transform = "translateY(100%)"
        setTimeout(function() {
            
            Im.style.opacity = 1;
        
            setTimeout(function() {
                firstName.style.opacity = 1;
                
                setTimeout(function() {
                    secName.style.opacity = 1;
                    contactBts.style.opacity = 1;
    
                    setTimeout(function() {
                        topLine.style.transform = 'scaleX(1)';
                        subH1.style.opacity = 1;
                        
                        setTimeout(function() {
                            fh3.style.opacity = 1;
                            emailBt.style.opacity = 1;
    
                            setTimeout(function() {
                                sh3.style.opacity = 1;
                                botLine.style.transform = 'scaleX(1)';
                                whatsBt.style.opacity = 1;

                                setTimeout(function() {
                                    gitBt.style.opacity = 1;
                                        learnMore.style.opacity = 1;

                                        setTimeout(function() {
                                            linkedinBt.style.opacity = 1;
                                        }, 400)
                                }, 400)
                            }, 400)
                        }, 600)
                    }, 600)
                }, 350)
            }, 300)
        }, 600)


        function toggleEmail() {
            emailCtnr.classList.toggle('show_email_ctnr');
            outForm.classList.toggle('show_out_form');
        }
        emailBt.addEventListener('click', function() {
            toggleEmail()
        })
        outForm.addEventListener('click', function() {
            toggleEmail()
        })

        function skipIntro() {
            preBg.style.transform = "translateY(100%)";
            preBg.style.transition = 'none';

            Im.style.opacity = 1;
            Im.style.transition = 'none';

            firstName.style.opacity = 1;
            firstName.style.transition = 'none';

            secName.style.opacity = 1;
            secName.style.transition = 'none';

            contactBts.style.opacity = 1;
            contactBts.style.transition = 'none';

            topLine.style.transform = 'scaleX(1)';

            subH1.style.opacity = 1;
            subH1.style.transition = 'none';

            fh3.style.opacity = 1;
            fh3.style.transition = 'none';

            emailBt.style.opacity = 1;
            emailBt.style.transition = 'none';

            sh3.style.opacity = 1;
            sh3.style.transition = 'none';

            whatsBt.style.opacity = 1;
            whatsBt.style.transition = 'none';

            botLine.style.transform = 'scaleX(1)';

            preBg.style.opacity = 1;
            learnMore.style.opacity = 1;

            learnMore.style.transition = 'none';

            gitBt.style.opacity = 1;
            gitBt.style.transition = 'none';
            
            linkedinBt.style.opacity = 1;
            linkedinBt.style.transition = 'none';

            alreadySkipped = true;
        }

        document.body.addEventListener('click', function() {
            skipIntro()},
            { once: true }
        );

        window.onscroll = function() {

            if(alreadySkipped == false) {
                skipIntro()
            } 

            if(this.scrollY > 800) {
                backTop.style.transform = "translateY(0)"
            } else {
                backTop.style.transform = "translateY(7rem)"
            }
        }
    }
  }


  learnMore.addEventListener('click', function() {
    exitBg.style.opacity = 1;
  })

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.querySelector('#age').innerHTML = calculate_age(new Date(1996, 5, 29))



