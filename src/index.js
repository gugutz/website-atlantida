import {siteTitle, b, c} from './config.js';
import navigate from './engine/navigate.js';
import addElement from './engine/add-element.js';
import getElement from './engine/get-element.js';
import header from './components/header.js';
import navbar from './components/navbar.js';
import content from './components/content.js';
import footer from './components/footer.js';


//  defining the template
const appDiv = getElement('app');

// rendering the structure
header()
navbar()
content()
footer()


// navigate once to the current location hash
navigate();
window.addEventListener('hashchange', navigate);

// my professional debugger
console.log(' hi');
