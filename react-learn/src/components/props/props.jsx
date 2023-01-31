import React from "react";

const Props = (props) => {
    console.log('My props - ',props.name,props.age);
    return (
    <div>
      <h1>Props</h1>
      <p>My name is {props.name} and my age is {props.age}</p>
    </div>
  );
}

export default Props;