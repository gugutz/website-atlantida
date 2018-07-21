import {siteTitle, b, c} from './config.js'
import {navigate} from './engine/router-history-api'
import 'bulma/css/bulma.css'
import './app.css'

// navigate once to go to home
window.addEventListener('load', navigate);

// watch for changes in location and import corresponding page
window.addEventListener('popstate', navigate)

// history.pushstate({foo: 'bar'}, 'title', `../../screens/${pageName}`)



// my professional debuger
console.log('hi')
// console.log(location.hash.substr(1));
console.log('History state: ' + history.state)

console.log('Window object status: ' + window.status)
