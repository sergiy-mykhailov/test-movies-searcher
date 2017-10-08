
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link'
import Redirect from 'react-router-dom/Redirect'

import StarIcon from 'material-ui/svg-icons/action/grade';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import './Container.css';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mainInfo: [], secondaryInfo: [] };
    }

    componentWillReceiveProps(nextProps) {

        let mainInfo = this.renderMainInfo(nextProps),
            secondaryInfo = this.renderSecondaryInfo(nextProps);

        this.setState({ mainInfo, secondaryInfo });
    }

    getNamesFromArray = (arr) => {
        if (!arr) return '-';
        return arr.map( (item, i) => item.name).join(', ');
    };

    getCostFromNumber = (number) => {
        if (!number) return '-';
        return '$ ' + number.toLocaleString();
    };

    getDateFromString = (str) => {
        if (!str) return '-';
        return str.split('-').reverse().join('.');
    };

    renderMainInfo = (nextProps) => {
        return [
            {
                leftIcon: (() => <StarIcon/>)(),
                primary: (() => {
                    return nextProps.movieDetails.vote_average;
                })(),
                secondary: ''

            },{
                leftIcon: null,
                primary: 'Genres',
                secondary: (() => {
                    return this.getNamesFromArray(nextProps.movieDetails.genres);
                })()
            },{
                leftIcon: null,
                primary: 'Countries',
                secondary: (() => {
                    return this.getNamesFromArray(nextProps.movieDetails.production_countries);
                })()
            },{
                leftIcon: null,
                primary: 'Status',
                secondary: (() => {
                    return nextProps.movieDetails.status;
                })()
            },{
                leftIcon: null,
                primary: 'Release date',
                secondary: (() => {
                    return this.getDateFromString(nextProps.movieDetails.release_date);
                })()
            }
        ];
    };

    renderSecondaryInfo = (nextProps) => {
        return [
            {
                leftIcon: null,
                primary: 'Budget',
                secondary: (() => {
                    return this.getCostFromNumber(nextProps.movieDetails.budget);
                })()
            },{
                leftIcon: null,
                primary: 'Revenue',
                secondary: (() => {
                    return this.getCostFromNumber(nextProps.movieDetails.revenue);
                })()
            },{
                leftIcon: null,
                primary: 'Companies',
                secondary: (() => {
                    return this.getNamesFromArray(nextProps.movieDetails.production_companies);
                })()
            },{
                leftIcon: null,
                primary: 'Homepage',
                secondary: (() => {
                    const homepage = nextProps.movieDetails.homepage;
                    return (!homepage) ? ' -' : <a href={homepage}>{homepage}</a>;
                })()
            }
        ];
    };

    renderMovies() {
        const styles = {
            left: {  position: 'relative', },
            right: {
                width: '60%',
                paddingLeft: '40%',
                position: 'absolute',
                top: 0
            },
            paper: { padding: 20, marginTop: 10 },
            img: { width: '40%'},
            main: { paddingLeft: 20  },
            secondary: { paddingLeft: 16, paddingRight: 16  }
        };
        return (
            <div className="container">
                <Paper zDepth={1} style={styles.paper}>
                    <div style={styles.left}>

                        <img style={styles.img}
                            src={this.props.imgUri + this.props.movieDetails.poster_path} />

                        <div style={styles.right}>
                            <div style={styles.main}>
                                <h3>{this.props.movieDetails.title}</h3>

                                <List>
                                    {this.state.mainInfo.map( (item, i) => {
                                        return (
                                            <ListItem
                                                key={i}
                                                primaryText={item.primary}
                                                secondaryText={item.secondary}
                                                leftIcon={item.leftIcon}
                                            />
                                        );
                                    })}
                                </List>

                            </div>
                        </div>

                        <div>
                            <h3 style={styles.secondary}>Overview</h3>
                            <p style={styles.secondary}>{this.props.movieDetails.overview}</p>
                            <List>
                                {this.state.secondaryInfo.map( (item, i) => {
                                    return (
                                        <ListItem
                                            key={i}
                                            primaryText={item.primary}
                                            secondaryText={item.secondary}
                                        />
                                    );
                                })}
                            </List>

                            <div style={styles.secondary}>
                                <Link to={
                                    (!this.props.location.state)
                                        ? '/'
                                        : this.props.location.state.from}>
                                    <RaisedButton label="Back"/>
                                </Link>

                            </div>
                        </div>

                    </div>
                </Paper>
            </div>
        );
    }
    render() {
        if (this.props.isError)
            return (<Redirect to={{
                pathname: '/error',
                state: { from: this.props.match.url }
            }}/>);

        const styles = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        };

        return (
            <div style={styles} >
                {(this.props.isLoading)
                    ? <CircularProgress size={80} />
                    : this.renderMovies()
                }
            </div>
        );
    }
}

MoviePage.propTypes = {
    movieDetails:   PropTypes.object.isRequired,
    isLoading:      PropTypes.bool.isRequired,
    isError:        PropTypes.bool.isRequired,
    imgUri:         PropTypes.string.isRequired
};

export default MoviePage;