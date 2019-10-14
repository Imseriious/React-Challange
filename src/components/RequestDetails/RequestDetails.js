import React, { Component } from 'react';
import { connect } from 'react-redux'

class RequestDetails extends Component {
    render() {
        const request = this.props.req.filter(req => {
            console.log(req.id)
            console.log(this.props.match.params.id)
            //return (req.id == this.props.match.params.id ? req : console.log("No"))
            
        })

        return (
            <>
                <h1>Request Details</h1>
                
                <h1>{request.name}</h1>
            </>
        )
    }
}

//

const mapStateToProps = state => {
    return {
        req: state.requests
    }
};

export default connect(mapStateToProps)(RequestDetails);