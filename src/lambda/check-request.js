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
      body: 'no body sent'
    })
  }
}

export default checkRequest
