const box = document.querySelector('.modal');
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function handleForm(evt) {
  evt.preventDefault();

  const formData = {
    name: document.querySelector('#contact-name').value,
    mail: document.querySelector('#contact-mail').value,
    subject: document.querySelector('#contact-subject').value,
    message: document.querySelector('#contact-message').value,
  };

  // mounting the fetch
  const endpointUrl = '/.netlify/functions/mail';
  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
  });
  const requestInit = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(formData),
  };
  const request = new Request(endpointUrl, requestInit);

  // making the fetch
  fetch(request)
    .then(response => {
      box.classList.toggle('is-active');
      console.log(JSON.stringify(response));
      // passing the response down the .then/.catch pipeline
      return response;
    })
    .catch(error => {
      console.error('Error fetching:', error);
      return error;
    })
    .then(response => {
      console.log('stuff' + response);
    });
  // setTimeout(2, box.classList.toggle('is-active'));
});
