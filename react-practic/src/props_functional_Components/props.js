import React from 'react';

function Props(props) {
  function clickMe(a){
    alert(a);
  }
  return (
    <div>
      <h1>This is Props. My name is  {props.name} and i am {props.age}. I am working start in {props.year}</h1>
      <button onClick = {clickMe.bind(this,"I am Passing arguments to event handlers through Functional Components")}>Click Me</button>
    </div>
  );
}

export default Props;