import React from 'react';
import classes from './CreateRequest.module.css';
import {Link} from 'react-router-dom';

const CreateRequest = () => {
    return (
        <div className={classes.Createrequest}>
            <Link to="/newrequest">Create Request</Link>
        </div>
    )

}

export default CreateRequest;