const checkData = data => {
  //make sure all required data came with the request
  if (!data.name || !data.mail || !data.subject || !data.message) {
    console.error(chalk.red('Required information is missing.'))
    console.error(chalk.red(data.body.name))
    return false
  } else {
    return true
  }
}

export default checkData
