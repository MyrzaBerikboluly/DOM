const enter = document.getElementById('enter')
const writing = document.getElementById('writing')
const button = document.getElementById('button')
const finish = document.getElementById('finish')

enter.addEventListener('input', () => {
    writing.textContent = `Сіз енгізіп жатырсыз: ${enter.value}`
})

button.addEventListener('click', () => {
    finish.textContent = `Сіз еңгіздіңіз: ${enter.value}`
})