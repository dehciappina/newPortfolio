

const transitionBg = document.querySelector('#transition_bg')
const introBg = document.querySelector('#intro_bg')

const contactBts = document.querySelector('#contact_bts')

const emailBt = document.querySelector('#email_bt')
const whatsBt = document.querySelector('#whats_bt')
const gitBt = document.querySelector('#git_bt')

const exit = document.querySelector('#return')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        introBg.style.opacity = 0;
    }
  }

  exit.addEventListener('click', function() {
    exitBg.style.opacity = 1;
  })