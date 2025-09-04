const {React} = 'react';
const { BrowserRouter, Routes, Route, Link } = 'react-router-dom';
const Home = './pages/Home';
const About = './pages/About';

export default function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      'div',
      null,
      // Navigation Links
      React.createElement(
        'nav',
        null,
        React.createElement(Link, { to: '/' }, 'Home'),
        ' | ',
        React.createElement(Link, { to: '/about' }, 'About')
      ),
      // Route Definitions
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About) })
      )
    )
  );
}
