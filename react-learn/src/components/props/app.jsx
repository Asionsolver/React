import React from "react";
import Props from "./props";

class App extends React.Component {
  render() {
    // console.log('Class props - ',this.props);
    return (
      <div>
        <Props name="Asion" age ='45'/>
        <Props name="Ashis" age ='25'/>
        <Props name="Asis" age ='24'/>
      </div>
    );
  }
}

export default App;