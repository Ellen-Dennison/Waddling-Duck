const React = require('react');
const ReactDOM = require('react-dom/client');
const App = require('./App'); // If App exports a component directly


// Find the root div in index.html
const container = document.getElementById('root');

// Create a React root
const root = ReactDOM.createRoot(container);

// Render the App component
root.render(
  React.createElement(App) // No JSX — using React.createElement
);
