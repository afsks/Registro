function signUp() {
    document.getElementById("signIn").style.border = "0";
    document.getElementById("signUp").style.border = "1px solid #5390d9";
    document.querySelector('.signUp').classList.remove('is-active');
    document.querySelector('.signIn').classList.add('is-active');
}
function signIn() {
    document.getElementById("signUp").style.border = "0";
    document.getElementById("signIn").style.border = "1px solid #5390d9";
    document.querySelector('.signIn').classList.remove('is-active');
    document.querySelector('.signUp').classList.add('is-active');
}
 