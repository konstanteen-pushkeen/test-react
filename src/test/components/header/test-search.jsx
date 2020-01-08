import React from 'react';
import PropTypes from 'prop-types';

const Search = ( {onSearchItem} ) => {
    return <button type="button"
                   className="btn -search"
                   onClick={onSearchItem}></button>;
}

export default Search;

Search.propTypes = {
    onSearchItem: PropTypes.func,
};

Search.defaultProps = {
    onSearchItem: () => {},
};