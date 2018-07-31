const sgMail = require('@sendgrid/mail')

const sendMail = async data => {
  const receiver = process.env.MAIL_RECEIVER
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail = {
      to: receiver,
      from: data.mail,
      subject: data.subject,
      text: data.message,
      html: `<strong>Nome: ${data.name}</strong><br>
           <strong>mail: ${data.mail}</strong><br>
           <strong>Mensagem: ${data.message}</strong><br>`
    }

    sgMail.send(mail)
    return mail
  } catch (err) {
    console.error(chalk.red('error sending mail' + err))
    return err
  }
}

export default sendMail
