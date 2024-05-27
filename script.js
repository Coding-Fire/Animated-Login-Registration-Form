const SignInBtnLink = document.querySelector('.signInBtn-link');
const SignUpBtnLink = document.querySelector('.signUpBtn-link')
const wrapper = document.querySelector('.wrapper');

SignInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

SignUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});