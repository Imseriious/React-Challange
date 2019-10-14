import React, { Component } from 'react';
import { connect } from 'react-redux';

import Request from './Request/Request';

class OpenRequests extends Component {
    render() {
        const requests = this.props.req.map(request => {
            return(<Request
                key={request.id}
                kind={request.kind}
                name={request.name}
                start={request.start}
                end={request.end}
                info={request.info}
            />)
        }
        )
    return(
        <div>
            <h1>Open Requests:</h1>
            {requests}
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        req: state.requests
    }
};

export default connect(mapStateToProps)(OpenRequests);