const inputs = document.querySelectorAll('.input')
const form = document.querySelector('form')
form.reset()

inputs.forEach(field => field.addEventListener('input', () => {
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