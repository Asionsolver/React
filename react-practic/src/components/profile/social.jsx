/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import "./profile.style.css";

const Social = (props)=>{
    return(
        <div className="social">
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#">{props.socialA}</a></li>
                            <li><a href="#">{props.socialB}</a></li>
                            <li><a href="#">{props.socialC}</a></li>
                            <li><a href="#">{props.socialD}</a></li>
                            <li><a href="#">{props.socialE}</a></li>
                        </ul>
                    </div>
    )
}

export default Social;