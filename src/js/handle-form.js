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
      console.log(JSON.stringify(response))
      // passing the response down the .then/.catch pipeline
      return response
    })
    .catch(error => {
      console.error('Error fetching:', error)
      return error
    })
    .then(response => {
      console.log('stuff' + response)
    })
  // setTimeout(2, box.classList.toggle('is-active'));
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
