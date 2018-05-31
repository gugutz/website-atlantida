const getContent = (pageName, callback) => {
  // object containnig the pages to include
  // let pages = {
  //   home: 'teste',
  //   about: 'about'
  // }
  // callback(pages[pageName]);
  // the above is same as using property name access:   // return contentPages.home ,  but i cant use a variable to navigate the object

  // creating a new ajax request for fetching the html with the content
  let request = new XMLHttpRequest();

  // call the callack with the content loaded from the file
  request.onload = () => {
    callback(request.responseText);
  };

  // fetch the content of html file based on the name extracted from the fragmentId
  request.open('GET', pageName + '.html');
  request.send(null);
}

export default getContent;
