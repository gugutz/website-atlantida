require('dotenv').config()
const receiver = process.env.MAIL_RECEIVER
const chalk = require('chalk')
import {checkRequest, sendMail} from './send-mail'

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
    const statusCode = 200
    const responseObj = {statusCode, body: 'ok'}
    return responseObj
  } catch (err) {
    console.error(chalk.red('erro no endpoint: ' + err))
    // callback(err);
    return err
  }
  console.log('-------------------------------------')
}
