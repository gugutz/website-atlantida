import setActiveLink from './set-active-link.js';
import getContent from './get-content.js';


// function to navigate to content based on location.hash
const navigate = () => {
  // sets the default location.hash if none is selected
  if (!location.hash) {
    location.hash = '#home';
  }
  let contentPane = document.getElementById('content');
  // uses substring to remove the hash character (#) from the location
  let pageName = location.hash.substr(1);
  contentPane.innerHTML = getContent(pageName, () => {});
  // set activeLink for current location
  setActiveLink(pageName);
}
export default navigate;
