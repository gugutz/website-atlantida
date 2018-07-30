import {redirect} from './redirect.js';
require('dotenv').config();
const {parse} = require('querystring');

const statusCode = 200;

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': false,
  'Access-Control-Max-Age': '86400', // 24 hours
  'Access-Control-Allow-Headers':
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
};

exports.handler = async event => {
  console.log('-------------------------------------');
  console.log('begin handler function');
  console.log('received object: ' + event.body);

  try {
    if (event.httpMethod === 'OPTIONS') {
      console.log('!OPTIONS');
      return corsHeaders;
    }
    if (event.httpMethod !== 'POST') {
      console.log('OPTIONS preflight? Returning CORS Headers');
      return {
        statusCode,
        corsHeaders,
        body: JSON.stringify({status: 'no POST body sent'}),
      };
    }
    if (!event.body) {
      console.log('no POST body sent');
      callback(null, {
        statusCode,
        headers,
        body: 'no body sent',
      });
    }

    // create an object from the request
    const data = JSON.parse(event.body);

    //make sure all required data came with the request
    if (!data.name || !data.mail || !data.subject || !data.message) {
      console.error('Required information is missing.');
      return {
        statusCode,
        headers,
        body: JSON.stringify({status: 'missing-information'}),
      };
    }

    console.log('data.name = ' + data.name);
    console.log('data.mail = ' + data.mail);


    await sendMail(data)

    return data
  } catch (err) {
    console.log('erro no endpoint: ' + err);
    return err;
  }
};

const sendMail = async data => {
  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY);

    const mail = {
      to: `contato@atlantidaaluminio.com.br`,
      from: `${data.mail}`,
      subject: `${data.subject}`,
      text: `${data.message}`,
      html: `<strong>Nome: ${data.name}</strong><br>
           <strong>mail: ${data.mail}</strong><br>
           <strong>Mensagem: ${data.message}</strong><br>`,
    };

    sgMail.send(mail);
    return await  mail
  } catch (err) {
    console.log('error sending mail' + err);
    return err;
  }
  console.log('-------------------------------------');
};

