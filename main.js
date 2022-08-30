const btn = document.querySelector('.btn')
const userInput = document.getElementById('username')
const error = document.querySelector('.errMessage')
const inputs = document.querySelectorAll('.input')



btn.addEventListener('click', (e) => {
    validation(e)
})

inputs.forEach(input => input.addEventListener('input', (e) => {
    let inputField = document.getElementById(`${input.id}`)
    validation(e, inputField)
}))

function validation(e, input) {
    if(!input.checkValidity()) {
        document.querySelector('.error').style.visibility = 'visible'
        document.querySelector('.check').style.visibility = 'hidden'
        error.style.visibility = 'visible'
        error.textContent = `Please enter valid ${e.target.id}`
        e.preventDefault()
        return false
    }else {
        error.style.visibility = 'hidden'
        document.querySelector('.error').style.visibility = 'hidden'
        document.querySelector('.check').style.visibility = 'visible'
        return true
    }
}