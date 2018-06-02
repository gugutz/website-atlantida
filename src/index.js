import {siteTitle, b, c} from './config.js';
import {navigate} from './engine/router.js';

// navigate once to go to home
navigate();

// watch for changes in location and import corresponding page
window.addEventListener('hashchange', navigate);

// my professional debugger
console.log(' hi');
console.log(location.hash.substr(1));
