import React from 'react';
import classes from './button.module.css';

const cssModuleBtn = () => {
    return (
        <div>
            <h3 className='heading'>CSS Module explain part 1</h3>
            <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sit commodi quis reiciendis?</p>
            <button className={classes.btn}>CSSModuleBtn</button>
        </div>
    )
}

export default cssModuleBtn;
