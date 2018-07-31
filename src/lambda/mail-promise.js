require('dotenv').config()
const receiver = process.env.MAIL_RECEIVER
const chalk = require('chalk')
const {parse} = require('querystring')
import checkRequest from './check-request'
import checkData from './check-data'
import sendMail from './send-mail'

exports.handler = async (event, context, callback) => {
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
