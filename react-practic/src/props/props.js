import React from 'react';

function Props(props) {
  return (
    <div>
      <h1>This is Props. My name is  {props.name} and i am {props.age}. I am working start in {props.year}</h1>
    </div>
  );
}

export default Props;