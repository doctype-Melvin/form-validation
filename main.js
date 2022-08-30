



// const input = document.querySelectorAll('input')

// input.forEach(field => field.addEventListener('input', () => {
//     field.setCustomValidity('')
//     field.checkValidity()
// }))

// input.forEach(field => field.addEventListener('invalid', () => {
//     if (field.value === '') {
//         field.setCustomValidity(`Please enter a ${field.type}`)
//     } else {
//         field.setCustomValidity('This is not the correct input type')
//     }
// }))

// input.forEach(field => field.addEventListener('input', (e) => {
//     if (field.validity.typeMismatch) {
//         field.setCustomValidity('Something went wrong')
//         field.reportValidity()
//     }else {
//         field.setCustomValidity('')
//     }
// }))

// const phone = document.getElementById('phone')

// phone.addEventListener('input', () => {
//     phone.setCustomValidity('')
//     phone.checkValidity()
// })
// phone.addEventListener('invalid', () => {
//     if (phone.value === ''){
//         phone.setCustomValidity('This field is optional')
//     }else {
//         phone.setCustomValidity('I am expecting a phone number')
//     }
// })