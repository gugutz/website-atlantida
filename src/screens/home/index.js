import addElement from "../../engine/add-element";

const homePage = () => {
  const homePage =  addElement('p', undefined, 'home-text')
  const homePageText = document.createTextNode('home page text here')
  aboutPage.appendChild(homePageText)
  return homePage
}

export default homePage
