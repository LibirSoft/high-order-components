import React, { Component } from 'react'

const LoaderHoc = (WrappedComponent,field) => {
    return class LoaderHoc extends Component {
        render() {
            return this.props[field].length === 0 ? <div>loading...</div> : <WrappedComponent {...this.props} />
        }
    }
};

export default LoaderHoc; 