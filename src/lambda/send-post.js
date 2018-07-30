async function sendPost(data) {
  xhr = new XMLHTTPRequest();
  xhr.open('POST', 'https://localhost.com:9000/send-mail', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  try {
    await xhr.send(data);
  } catch (err) {
    console.log('erro ao enviar objeto para o endpoint: ' + err);
  }
  xhr.onload = () => {
    console.log("data send to api endpoint")
  }

}

export default sendPost;
