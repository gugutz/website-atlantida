const router = async (pageName) => {

  const stateObj = {
    home: "",
    homeTitle: "Atlantida Alumínio"
  }

  if (pageName === '') {
    history.pushState(stateObj.home, stateObj.homeTitle, '');
    const {default: currentScreen} = await import(`../../screens/${pageName}`)
    window.app.innerHTML = ''
    window.app.appendChild(await currentScreen())
  }
  else {
    const {default: currentScreen} = await import(`../../screens/${pageName}`)
    history.pushState(stateObj, `${pageName}`, `/${pageName}`);
    window.app.innerHTML = ''
    window.app.appendChild(await currentScreen())
  }




}

const navigate = async () => {
  // as acording to standartJS, null and undefined checks may use '==' to compare. all other compares MUST use '==='
  if (history.state == null || history.state == undefined) {
    router('')
  }
  else {
    const pageName = history.state
    router(pageName)
  }
}

export {router, navigate}
