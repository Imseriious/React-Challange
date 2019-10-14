import React from 'react';
import classes from './Request.module.css';
import {Link } from 'react-router-dom';

const Request = (props) => {

    return (
        
            <div className={classes.Request}>
                <tr>
                    <td>{props.kind}</td>
                    <td>{props.start} - {props.end}</td>
                </tr>
            </div>
        
    )
}

export default Request;