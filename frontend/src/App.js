const React = require('react');
const { createElement } = require('react');
const { BrowserRouter, Routes, Route, Link } = require('react-router-dom');
const Home = require('./pages/Home');
const About = require('./pages/Profile');

function App() {
  return createElement(
    BrowserRouter,
    null,
    createElement(
      'div',
      null,
      // Navigation Links
      createElement(
        'nav',
        null,
        createElement(Link, { to: '/' }, 'Home'),
        ' | ',
        createElement(Link, { to: '/about' }, 'About')
      ),
      // Route Definitions
      createElement(
        Routes,
        null,
        createElement(Route, { path: '/', element: createElement(Home) }),
        createElement(Route, { path: '/about', element: createElement(About) })
      )
    )
  );
}

module.exports = App;