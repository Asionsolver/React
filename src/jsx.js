import React from 'react';
import ReactDOM from 'react-dom';
   
// const element = React.createElement('h1', null, 'Hello, world!');
// const element = <h1>Hello, world!</h1>;

// const element = React.createElement('h1', {className: 'Heading'}, 'Hello, world!');
// const index = 1;
// const element = (
// <h1 className='Heading' tabIndex={index}>
// <span className='text'>Hello, world!</span>
// <img src="" alt="" srcset="" />
// </h1>
// );

/*
element = {
    type: 'h1',
    props: {
        className: 'Heading',
        tabIndex: 1,
        children: [
            {
                type: 'span',
                props: {
                    className: 'text',
                    children: 'Hello, world!'
                }
            },
            {
                type: 'img',
                props: {
                    src: '',
                    alt: '',
                    srcset: ''
                }
            }
        ]
    },
};

*/

// function getGreetings(user) { 
//   if (user) {
//     return <h1>Hello, {user}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element2 = <h1>Hello {getGreetings('Ashis')}</h1>
// console.log(element);


setInterval(() => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
, 1000);
