import getElement from './get-element';

const contentDiv = getElement('content');

  export const homeRoute = async () => {
    const homeScreen = await import('../screens/home')
    contentDiv.appendChild(await homeScreen)
  }

  export async function aboutRoute() {
    const aboutScreen = await import('../screens/about')
    contentDiv.appendChild(await aboutScreen)
  }
