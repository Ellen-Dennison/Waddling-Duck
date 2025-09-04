const {React} = 'react';

export default function About() 
{
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'About Page'),
    React.createElement('p', null, 'This is the about page.')
  );
}
