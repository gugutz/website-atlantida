import sendMail from './send-mail'

const statuscode = 200;
// import fetch from 'node-fetch';
let data = {};
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

exports.handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      data = JSON.parse(event.body);
      console.log('event body options: ' + event.body);
      return await {
        status: 200,
        header: headers,
        body: JSON.stringify({status: 'cors problem'}),
      }.promise();
    }
    if (event.method === 'GET') {
      console.log('body');
      return await {
        status: 200,
        header: headers,
        body: JSON.stringify({status: 'GET request successfull'}),
      }.promisse();
    }
    if (event.httpMethod !== 'POST' || event.body) {
      console.log('no POST body sent');
      return await {
        statusCode,
        headers,
        body: JSON.stringify({status: 'no POST body sent'}),
      };
    }

    // after POST body verified, create an object for it

    //make sure all fields are filled (have values)
    if (!data.name || !data.mail || !data.subject || !data.message) {
      console.error('Required information is missing.');
      return await {
        statusCode,
        headers,
        body: JSON.stringify({status: 'missing-information'}),
      };
    }

    console.log('POST event body: ' + event.body);
    console.log('POST object.name ' + data.name);
    console.log('POST object.mail ' + data.mail);

    const mail = {
      to: `gugutz@gmail.com`,
      from: `${data.mail}`,
      subject: `${data.subject}`,
      text: `${data.message}`,
      html: `<strong>Nome: ${data.name}</strong><br>
           <strong>mail: ${data.mail}</strong><br>
           <strong>Mensagem: ${data.message}</strong><br>`,
    };
    await sendMail(mail);
  } catch (err) {
    console.log('erro no endpoint: ' + err);
    return err;
  }
  return data;
};
