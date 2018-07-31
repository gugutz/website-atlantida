const closeMsgBtn = document.querySelector('.close-msg-button')

closeMsgBtn.addEventListener('click', e => {
  console.log('modal fechado')
  modalMsg.classList.remove('is-active')
})
