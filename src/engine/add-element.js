const addElement = (tagType, className) => {
  const element = document.createElement(tagType);
  if(className != undefined){
    element.setAttribute('class', className);
  }
  return element;
}
export default addElement;
