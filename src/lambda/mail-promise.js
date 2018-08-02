require('dotenv').config()
const receiver = process.env.MAIL_RECEIVER
const chalk = require('chalk')
const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('-------------------------------------')
      console.log('begin promise based handler function...')
      console.log('received object: ' + event.body)

      checkRequest(event)

      // create an object from the request
      const data = JSON.parse(event.body)

      console.log(chalk.blue('data.name = ' + data.name))
      console.log(chalk.blue('data.mail = ' + data.mail))

      if (checkData(data)) {
        sendMail(data)
      }

      // responding to the request
      const statusCode = 200
      const responseObj = {statusCode, body: 'ok'}
      resolve(responseObj)
    } catch (err) {
      console.error(chalk.red('erro no endpoint: ' + err))
      reject(err)
      // return err;
    }
    console.log('-------------------------------------')
  })
}



const checkRequest = request => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': false,
    'Access-Control-Max-Age': '86400', // 24 hours
    'Access-Control-Allow-Headers':
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  }

  // if request is OPTIONS, return CORS headers
  if (request.httpMethod === 'OPTIONS') {
    console.log('OPTIONS preflight? Returning CORS Headers')
    return {
      statusCode: 400,
      corsHeaders,
      body: JSON.stringify({status: 'no POST body sent'})
    }
  }

  // if request is not POST, complain
  if (request.httpMethod !== 'POST') {
    console.log(chalk.red('The request wasnt a POST request'))
    return {
      statusCode: 200,
      header: headers,
      body: JSON.stringify({status: 'no POST body sent'})
    }
  }

  // if there is no body in the request, something is wrong
  if (!request.body) {
    console.error('no POST body sent')
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify('no POST body sent')
    }
  }
}

const validateData = data => {
  const {name, mail, subject, message} = data
  //make sure all required data came with the request
  if (!name || !mail || !subject || !message) {
    console.error(chalk.red('Required information is missing.'))
    throw new Error('Required information is missing.')
    return false
  } else {
    return true
  }
}

const sendMail = async data => {
  const {name, mail, subject, message} = data
  const receiver = process.env.MAIL_RECEIVER

  try {
    if (validateData(data)) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const email = {
        to: receiver,
        from: mail,
        subject: subject,
        text: message,
        html: `<strong>Nome: ${name}</strong><br>
           <strong>mail: ${mail}</strong><br>
           <strong>Mensagem: ${message}</strong><br>`
      }

      return sgMail.send(email)
    }
  } catch (err) {
    console.error(chalk.red('error sending mail: ' + err))
    return err
  }
}

export {checkRequest, validateDate, sendMail}
