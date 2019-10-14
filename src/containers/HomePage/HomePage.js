import React from 'react';
import OpenRequests from '../../components/OpenRequests/OpenRequests';
import CreateRequest from '../../components/CreateRequest/CreateRequest';

const Homepage = () => {
    return(
        <>
        <CreateRequest />
        <OpenRequests />
        </>
    )
}

export default Homepage