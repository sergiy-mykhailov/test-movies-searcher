
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link'
import Redirect from 'react-router-dom/Redirect'

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarIcon from 'material-ui/svg-icons/action/grade';
import CircularProgress from 'material-ui/CircularProgress';

class MoviesList extends React.Component {

    renderMovies() {
        const styles = {
            tile: { width: 300, margin: 'auto' },
            icon: { width: 12, height: 12 },
        };
        return (

                <GridList
                    cellHeight={430}
                    padding={20}
                >
                    <Subheader>Movies:</Subheader>
                    {this.props.movies.map((item) => (
                        <GridTile
                            style={styles.tile}
                            key={item.id}
                            title={item.title}
                            subtitle={<span>
                                {item.vote_average} <StarIcon color="white" style={styles.icon}/>
                            </span>}

                        >
                            <Link to={{
                                pathname: `/movie/${item.id}`,
                                state: { from: this.props.currentPath }
                            }}>
                                <img src={this.props.imgUri + item.poster_path} />
                            </Link>
                        </GridTile>
                    ))}
                </GridList>
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

MoviesList.propTypes = {
    movies:         PropTypes.array.isRequired,
    isLoading:      PropTypes.bool.isRequired,
    imgUri:         PropTypes.string.isRequired,
    currentPath:    PropTypes.string.isRequired
};

export default MoviesList;