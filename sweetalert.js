const successA = document.querySelector(`#successA`)
const errorA = document.querySelector(`#errorA`)
const confirmA = document.querySelector(`#confirmA`)

successA.addEventListener('click', function() {
    Swal.fire({
        icon: 'success',
        title: 'success',
        text: "hi, welcome to rerofyal",
        timer: 2000
    })
})

errorA.addEventListener('click', function() {
    Swal.fire({
        icon: 'error',
        title: 'error',
        text: "hi, welcome to rerofyal",
        timer: 2000
    })
})

confirmA.addEventListener('click', function() {
    Swal.fire({
        icon: 'question',
        title: 'are u sure',
        text: "hi, welcome to rerofyal",
        timer: 2000
    })
})