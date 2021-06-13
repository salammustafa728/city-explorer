import React, { Component } from 'react'

export class ErrorHandle extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // eslint-disable-next-line no-undef
        // logErrorToMyService(error, info);
      }
    render() {
        return (
            <div>
                {
                     this.state.hasError ? <h1>Something went wrong.</h1>  : this.props.children
                }
                
            </div>
        )
    }
}

export default ErrorHandle
