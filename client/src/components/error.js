import React, {Component} from 'react';
import Header from './layout/header';

class Error extends Component {
    render() {
        return (
            <div>
                <Header/>

                <br/>
                <br/>
                <br/>
                <br/>
                <h5><code>The page you are looking for doesn't exist.</code></h5>
                <br/>
                <h1><code>404 Error!</code></h1>
            </div>
        )
    }
}

export default Error;