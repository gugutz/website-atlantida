const router = async (destination) => {
  if (destination == '') {
    destination += 'home'
  }
  const {default: currentScreen} = await import(`../screens/${destination}`)
  window.app.innerHTML = ''
  window.app.appendChild(await currentScreen())
}

const navigate = async () => {
  const destination = location.hash.substr(1)
  router(destination)
}

export {router, navigate}
