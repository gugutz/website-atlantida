require('dotenv').config()
const receiver = process.env.MAIL_RECEIVER
const chalk = require('chalk')
const sgMail = require('@sendgrid/mail')
const Joi = require('joi')

exports.handler = async (event, context) => {
  try {
    console.log('-------------------------------------')
    console.log('begin handler function...')
    console.log('received object: ' + event.body)

    checkRequest(event)

    // create an object from the request
    const data = JSON.parse(event.body)

    console.log(chalk.blue('data.name = ' + data.name))
    console.log('data.mail = ' + data.mail)

    await sendMail(data)

    // responding to the request
    const response = {statusCode: 200, body: JSON.stringify({status: 'ok'})}
    return response
  } catch (err) {
    console.error(chalk.red('erro no endpoint: ' + err))
    // callback(err);
    return err
  }
  console.log('-------------------------------------')
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

  // defining Joi validation schema
  const schema = Joi.object()
    .keys({
      formName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
      formMail: Joi.string().email({minDomainAtoms: 2}),
      formSubject: Joi.string()
        // .alphanum()
        .min(3)
        .max(30)
        .required(),
      formMessage: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required()
    })
    .with('formName', ['formMail', 'formSubject', 'formMessage'])
  // .without('password', 'access_token')

  console.log('validate: ' + name + mail + subject + message)
  const result = Joi.validate(
    {
      formName: name,
      formMail: mail,
      formSubject: subject,
      formMessage: message
    },
    schema
  )

  //make sure all required data came with the request
  if (result.error === null) {
    console.log('no errors in validation')
    return true
  } else {
    throw new Error('Required information is missing.')
    return false
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
    } else {
      throw new Error('Required information is missing.')
      return {statusCode: 422, body: JSON.stringify({erro: 'error validating'})}
    }
  } catch (err) {
    console.error(chalk.red('error sending mail: ' + err))
    return err
  }
}
