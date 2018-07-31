const sgMail = require('@sendgrid/mail')
const chalk = require('chalk')

const checkRequest = request => {
  const statusCode = 200

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
    return corsHeaders
  }

  // if request is not POST, complain
  if (request.httpMethod !== 'POST') {
    console.log(chalk.red('The request wasnt a POST request'))
    return {
      statusCode,
      headers,
      body: JSON.stringify({status: 'no POST body sent'})
    }
  }

  // if there is no body in the request, something is wrong
  if (!request.body) {
    console.error('no POST body sent')
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify('no body sent')
    })
  }
}

const checkData = data => {
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
    if (checkData(data)) {
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

      const response = sgMail.send(email)
      return response
    }
  } catch (err) {
    console.error(chalk.red('error sending mail: ' + err))
    return err
  }
}

export {checkRequest, checkData, sendMail}
