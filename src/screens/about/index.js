import addElement from "../../engine/add-element";

const aboutPage = () => {
  const aboutPage =  addElement('p', undefined, 'about-text')
  const aboutPageText = document.createTextNode('about page text here')
  aboutPage.appendChild(aboutPageText)
  return aboutPage
}

export default aboutPage;
