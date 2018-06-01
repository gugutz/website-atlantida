import setActiveLink from './set-active-link.js';
import {homeRoute, aboutRoute} from './get-content.js';
import getElement from './get-element.js';

const navigate = () => {
  const contentPane = getElement('content')
  const pageName = location.hash.substr(1)

  if (!location.hash) {
    location.hash = '#home'
    homeRoute();
  }
  if(location.hash === '#about') {
    aboutRoute()
  }
  setActiveLink(pageName)
}

export default navigate
