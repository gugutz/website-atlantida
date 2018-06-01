const addElement = (tagType, idName, className) => {
  const element = document.createElement(tagType + "");
  if(idName != undefined){
    element.setAttribute('id', idName);
  }
  if(className != undefined){
    element.setAttribute('class', className);
    // element = document.getElementById(idName);
  }
  return element;
}
export default addElement;
