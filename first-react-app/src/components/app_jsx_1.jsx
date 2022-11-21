import React, {Component} from 'react';

const MyComponent = () => <h1>My Custom Component.</h1>;
class App extends Component {
  render() {
    
  //   return React.createElement('div', {className: 'App'}, [
  //     React.createElement('h1', null, 'Hello World'),
  //     React.createElement('p', null, 'First time this component throw error. Because path import failed. Finally solve this problem.')
  //   ]);

    // return (
    //   <div className='App'>
    //     <h1>Hello World</h1>
    //     <p>First time this component throw error. Because path import failed. Finally solve this problem.</p>
    //   </div>
    // );
    
    const obj = {
      title: 'Test Title',
      id: 'test-id'
    };

    const name = 'Ashis Kumar';


    const bio = (
    <div>
      <h3>My Name is {name}</h3>
      <p>UI & UX Designer and Developer.</p>
    </div>
    );
    return (
      <React.Fragment>
        <h1 {...obj}>Hi... {name}</h1>
        <p >First time this component throw error. Because path import failed. Finally solve this problem.</p>
        <p>{new Date().toISOString()}</p>
        <MyComponent />
        {bio}
      </React.Fragment>
    );

    // short hand syntax of React.Fragment
    // return (
    //   <>
    //     <h1>Hello World</h1>
    //     <p>First time this component throw error. Because path import failed. Finally solve this problem.</p>
    //   </>
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
