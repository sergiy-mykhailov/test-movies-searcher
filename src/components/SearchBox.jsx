
import React from 'react';
import PropTypes from 'prop-types';

import AutoComplete from 'material-ui/AutoComplete';

class SearchBox extends React.Component {

    mapFunction = (key) => (item) => item[key];

    getDataSource = () => {
        return this.props.movies.map(this.mapFunction(this.props.filterType))
    };

    handleChange = (value) => {

        let arr = this.props.movies.filter( item => {
            let searchValue = item[this.props.filterType].toLowerCase();
            return searchValue.indexOf(value.toLowerCase()) !== -1;
        });

        this.props.onSearch(arr);
    };

    render() {
        return (
            <div>
                <AutoComplete
                    floatingLabelText="Filter"
                    filter={AutoComplete.caseInsensitiveFilter}
                    fullWidth={true}
                    dataSource={this.getDataSource()}
                    maxSearchResults={5}
                    onNewRequest={this.handleChange}
                    onUpdateInput={this.handleChange}
                />

            </div>
        );
    }
}

SearchBox.propTypes = {
    movies:     PropTypes.array.isRequired,
    onSearch:   PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired
};

export default SearchBox;