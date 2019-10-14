import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './OpenRequests.module.css';
import {Link} from 'react-router-dom';

import Request from './Request/Request';

class OpenRequests extends Component {
    render() {
        const requests = this.props.req.map(request => {
            return (
            <Link to={`/request/${request.id}`} key={request.id}>
            <Request
                key={request.id}
                kind={request.kind}
                name={request.name}
                start={request.start}
                end={request.end}
                info={request.info}
            />
            </Link>
            )
        }
        )
        return (
            <>
                <h1 className={classes.Title}>Open Requests:</h1>
                <div className={classes.Requests}>
                    <table>
                        <tr>
                            <th>Kind of Care</th>
                            <th>Time</th>
                        </tr>
                        {requests}
                    </table>

                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        req: state.requests
    }
};

export default connect(mapStateToProps)(OpenRequests);