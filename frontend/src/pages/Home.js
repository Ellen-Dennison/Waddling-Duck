const React = require('react');
const { createElement } = require('react');


function Home() 
{
  return createElement(
    'div',
    null,
    createElement('h1', null, 'Home Page'),
    createElement('p', null, 'Welcome to the home page!')
  );
}

module.exports = Home;