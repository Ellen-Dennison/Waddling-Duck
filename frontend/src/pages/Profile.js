const React = require('react');
const { createElement } = require('react');


function About() 
{
  return createElement(
    'div',
    null,
    createElement('h1', null, 'About Page'),
    createElement('p', null, 'This is the about page.')
  );
}

module.exports = About;