
import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect'

import SearchBox from './SearchBox.jsx';
import MoviesList from './MoviesList.jsx';

import Paper from 'material-ui/Paper';

import './Container.css';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = { movies: [] };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ movies: nextProps.movies });
    }

    handleSearch = (movies) => {
        if (!movies) return;

        this.setState({ movies });
    };

    render() {
        if (this.props.isError)
            return (<Redirect to={{
                pathname: '/error',
                state: { from: this.props.match.url }
            }}/>);

        const Style = { padding: 20 };
        return (
            <div className="container">
                <h2>{this.props.pageTitle}</h2>

                <SearchBox
                    movies={this.props.movies}
                    filterType={this.props.filterType}
                    onSearch={this.handleSearch}
                />

                <Paper zDepth={1} style={Style}>
                    <MoviesList
                        movies={this.state.movies}
                        isLoading={this.props.isLoading}
                        imgUri={this.props.imgUri}
                        currentPath={this.props.match.url}
                    />
                </Paper>

            </div>
        );
    }
}

Movies.propTypes = {
    movies:     PropTypes.array.isRequired,
    isLoading:  PropTypes.bool.isRequired,
    isError:    PropTypes.bool.isRequired,
    pageTitle:  PropTypes.string.isRequired,
    filterType: PropTypes.string.isRequired,
    imgUri:     PropTypes.string.isRequired
};

export default Movies;