const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')
form.reset()

const password = document.getElementById('pwd')
const passwordConfirm = document.getElementById('pwdConfirm')

inputs.forEach(field => field.addEventListener('input', () => { //
    if(!field.checkValidity() || field.value == '') {
        field.classList.remove('success')
        field.classList.add('fail')
        field.parentElement.lastChild.previousSibling.textContent = `Please enter valid ${field.name}`
    }else{
        field.classList.remove('fail')
        field.classList.add('success')
    }
}))

document.querySelector('.btn').addEventListener('click', (e) => {
    if(!form.checkValidity()) {
        e.preventDefault
    }
})

password.addEventListener('input', () => {
    const passRegEx = /^(?=.*[0-9])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{5,15}$/
    if(!password.value.match(passRegEx)){
        password.classList.remove('success')
        password.classList.add('fail')
        password.parentElement.lastChild.previousSibling.textContent = 'Please enter valid password'
    }else{
        password.classList.remove('fail')
        password.classList.add('success')
    }
})

passwordConfirm.addEventListener('input', () => {
    const passRegEx = password.value
    console.log(passRegEx)
    if(!passwordConfirm.value.match(passRegEx) || passwordConfirm.value.length !== password.value.length){
        passwordConfirm.classList.remove('success')
        passwordConfirm.classList.add('fail')
        passwordConfirm.parentElement.lastChild.previousSibling.textContent = 'Passwords do not match'
    }else if (passwordConfirm.value.length === password.value.length){
        passwordConfirm.classList.remove('fail')
        passwordConfirm.classList.add('success')
    }
})