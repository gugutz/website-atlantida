const form = document.querySelector('.contact-form')
form.addEventListener('submit', function handleForm(evt) {
  evt.preventDefault()

  const formData = {
    name: document.querySelector('.contact-name').value,
    mail: document.querySelector('.contact-mail').value,
    subject: document.querySelector('.contact-subject').value,
    message: document.querySelector('.contact-message').value
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
        return response.blob()
      } else {
        throw new Error()
        return
      }
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
