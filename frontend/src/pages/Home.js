const React = 'react';

export default function Home() 
{
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Home Page'),
    React.createElement('p', null, 'Welcome to the home page!')
  );
}
