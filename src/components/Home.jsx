
import React from 'react';
import Redirect from 'react-router-dom/Redirect'

import AppBar from 'material-ui/AppBar';

import '../images/logo.png'

class Home extends React.Component {

    renderLeftElement = () => {
        return (
            <div>
                <img src="img/logo.png" />
            </div>
        );
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Movies searcher"
                    iconElementLeft={this.renderLeftElement()}
                />
                <Redirect to="/top-rated"/>
            </div>
        );
    }
}

export default Home;
