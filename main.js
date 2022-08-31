const btn = document.querySelector('.btn')
const userInput = document.getElementById('username')
const error = document.querySelector('.errMessage')
const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')
form.reset()

inputs.forEach(field => field.addEventListener('input', () => {
    if(!field.checkValidity()) {
        field.classList.remove('success')
        field.classList.add('fail')
        error.textContent = `Please enter valid ${field.name}`
    }else{
        field.classList.remove('fail')
        field.classList.add('success')
    }
}))

// function validation(field) {
//     if(!field.checkValidity()) {
//         document.querySelector('.error').style.visibility = 'visible'
//         document.querySelector('.check').style.visibility = 'hidden'
//         error.style.visibility = 'visible'
//         error.textContent = `Please enter valid`
//         console.log(`${field.name} is invalid`)
//     }else{
//         error.style.visibility = 'hidden'
//         document.querySelector('.error').style.visibility = 'hidden'
//         document.querySelector('.check').style.visibility = 'visible'
//         console.log(`${field.name} is valid`)
//     }
// }
// inputs.forEach(field => field.addEventListener('input', () => {
//     let inputField = document.getElementById(`${field.id}`)
//     console.log(inputField)
//     validation(inputField)
// }))
// userInput.addEventListener('input', () => {
//     validation(userInput)
// })