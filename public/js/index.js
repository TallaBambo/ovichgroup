import '@babel/polyfill'
import { contact } from './contact'

const form = document.getElementById('form')
const submitBtn = document.querySelector('.sending')

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        submitBtn.innerHTML = 'Processing <i class="fa-sharp fa-solid fa-rotate"></i>'
        const email = document.getElementById('email').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value
        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        await contact(name, email, number, subject, message)
        submitBtn.innerHTML = 'Submit <i class="fa-solid fa-paper-plane"></i>'
        document.getElementById('email').value = ''
        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    })
}