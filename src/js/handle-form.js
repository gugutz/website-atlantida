const form = document.querySelector('.contact-form')
form.addEventListener('submit', function handleForm(evt) {
  evt.preventDefault()

  const formData = {
    name: form.name.value,
    mail: form.mail.value,
    subject: form.subject.value,
    message: form.message.value
  }

  // mounting the fetch
  const endpointUrl = '/.netlify/functions/mail'
  const requestHeaders = new Headers({
    'Content-Type': 'application/json'
  })
  const requestInit = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formData)
  }
  const request = new Request(endpointUrl, requestInit)

  // making the fetch
  fetch(request)
    .then(response => {
      if (response.ok) {
        console.log(response.json())
        return response.json()
      } else {
        throw new Error()
        return
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error('Error fetching:', error)
      return error
    })
})

const modalBox = document.querySelector('.modal')
const closeMsgBtn = document.querySelector('.modal-toggle')

form.addEventListener('submit', function modalToggle(evt) {
  modalBox.classList.toggle('is-active')
})

closeMsgBtn.addEventListener('click', e => {
  console.log('modal fechado')
  modalBox.classList.toggle('is-active')
})
