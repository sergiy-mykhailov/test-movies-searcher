
import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect'

import ErrorIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import { red500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './Container.css';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { redirect: false };
    }

    componentWillUnmount() {
        this.props.onClear();
    }

    handleClick = () => {
        this.props.onClear();
        this.setState({ redirect: true });
    };

    render() {
        if (this.state.redirect)
            return (<Redirect to={(!this.props.location.state)
                ? '/' : this.props.location.state.from}/>);

        const styles = {
            icon: { width: '10%', height: '10%' },
            header: { textAlign: 'center' },
            paper: { padding: 20, marginTop: 10 },
        };

        return (
            <div className="container">
                <Paper style={styles.paper} zDepth={1} >
                    <h3 style={styles.header}>
                        <ErrorIcon style={styles.icon} color={red500} />
                        <br />Something went wrong...
                    </h3>
                    <div>
                        <ul>
                            {this.props.error.map( (item, i) => {
                                return (
                                    <li key={i}>
                                        Error:
                                        <ul>
                                        {Object.keys(item).map((key, k) => {
                                            return (
                                                <li key={k}>
                                                    {key} : {item[key].toString()}
                                                </li>);
                                        })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div style={styles.header} >
                        <RaisedButton label="Close" onClick={this.handleClick}/>
                    </div>

                </Paper>
            </div>
        );
    }
}

ErrorPage.propTypes = {
    error:    PropTypes.array.isRequired,
    onClear:  PropTypes.func.isRequired
};

export default ErrorPage;