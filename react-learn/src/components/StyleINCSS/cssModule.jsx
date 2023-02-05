import React, { Component } from 'react';
import CssModuleBtn from './cssModuleBtn';
import CssModuleBtn2 from './cssModuleBtn2';

class CssModule extends Component {
  render() {
    return (
      <div>
        <h1>CSS Modules</h1>
        <CssModuleBtn />
        <CssModuleBtn2 />
      </div>

    )
  }
}

export default CssModule;
