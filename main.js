const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')
form.reset()

const username = document.getElementById('username')
const password = document.getElementById('pwd')
const passwordConfirm = document.getElementById('pwdConfirm')

inputs.forEach(field => field.addEventListener('input', () => { //
    if(!field.checkValidity() || field.value == '') {
        validator(false, field)
    }else{
        validator(true, field)
    }
}))

document.querySelector('.btn').addEventListener('click', (e) => {
    if(password.value != passwordConfirm.value) {
        e.preventDefault()
    }
   
})

password.addEventListener('input', () => {
    const passRegEx = /^(?=.*[0-9])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{5,20}$/
    if(!password.value.match(passRegEx)){
        validator(false, password)
    }else{
        validator(true, password)
    }
})

password.addEventListener('change', () => {
    if(password.value !== passwordConfirm.value || 
        password.value.length !== passwordConfirm.value.length) {
            validator(false, passwordConfirm)
        }else{
            validator(true, password)
        }
})

passwordConfirm.addEventListener('input', () => {
    const passRegEx = password.value
    console.log(passRegEx)
    if(!passwordConfirm.value.match(passRegEx) || passwordConfirm.value.length !== password.value.length){
        validator(false, passwordConfirm)
    }else if (passwordConfirm.value.length === password.value.length){
        validator(true, password)
    }
})

function validator (bool, field) {
    if(!bool && field.name != 'pwdConfirm') {
        field.classList.remove('success')
        field.classList.add('fail')
        field.parentElement.lastChild.previousSibling.textContent = `Please enter valid ${field.type}`
    }else if (!bool && field.name == 'pwdConfirm') {
        field.classList.remove('success')
        field.classList.add('fail')
        field.parentElement.lastChild.previousSibling.textContent = `Passwords don't match`
    }else {
        field.classList.remove('fail')
        field.classList.add('success')
    }
}