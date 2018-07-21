const router = async (pageName) => {
  const {default: currentScreen} = await import(`../../screens/${pageName}`)
  window.app.innerHTML = ''
  window.app.appendChild(await currentScreen())
}

const navigate = async () => {
  if (location.hash === '') {
    router('home')
  }
  else {
    const pageName = location.hash.substr(1)
    router(pageName)
  }
}

export {router, navigate}
