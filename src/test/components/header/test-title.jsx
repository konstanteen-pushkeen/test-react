import React from 'react';
import Search from './test-search';

import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <header>
            <div className="block -header">
                <h1 className="title">{props.title}</h1>
                <Search onSearchItem={props.onSearchItem} />
            </div>
        </header>
    );
}

export default Title;

Title.propTypes = {
    title: PropTypes.string,
    onSearchItem: PropTypes.func,    
};

Title.defaultProps = {
    title: "список покупок",
    onSearchItem: () => {},
};