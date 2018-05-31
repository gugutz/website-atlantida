'use strict';

import {siteTitle, b, c} from './config.js';
import navigate from './engine/navigate.js';


//  defining the template
let renderedPage;

renderedPage += `

  <header>
    ${siteTitle}
  </header>

  <nav id='navbar' class='navbar'>
    <ul class='menu'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
    </ul>
  </nav>

  <section id='content' class='container'>
    <p>Content Page</p>
  </section>

  <aside id='menu'>
    Menu lateral
  </aside>

  <footer id='footer'>
    Rodape
  </footer>

`; // end template string

document.getElementById('app').innerHTML = renderedPage;

// navigate once to the current location hash
navigate();
window.addEventListener('hashchange', navigate);

