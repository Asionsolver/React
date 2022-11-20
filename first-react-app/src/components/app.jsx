import React from 'react';

class App extends React.Component {
  render() {
    return React.createElement('div', {className: 'App'}, [
      React.createElement('h1', null, 'Hello World'),
      React.createElement('p', null, 'First time this component throw error. Because path import failed. Finally solve this problem.')
    ]);

    // return (
    //   <div className='App'>
    //     <h1>Hello World</h1>
    //     <p>First time this component throw error. Because path import failed. Finally solve this problem.</p>
    //   </div>
    // );
  }
}

export default App; 

// Function Component

// function MyFunctionalComponent(){
//   const name = 'John Doe';
//   return <h1>I am Functional Component.</h1>;
// }

// const ArrowFunctionalComponent = () => {
//   return <h1>I am Arrow Functional Component.</h1>;
// }

// const element ={
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     title: 'Hello World'
//   },
//   children: ['p', 'h1','img'] | 'Hello World' | null
// }
