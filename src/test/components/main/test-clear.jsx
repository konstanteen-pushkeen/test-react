import React from 'react';
import PropTypes from 'prop-types';

const Clear = ( {text, onClearList} ) => {
    return (
        <button type="button"
                className="btn -clear"
                onClick={onClearList}
        >{text}</button>
    );
}

export default Clear;

Clear.propTypes = {
    text: PropTypes.string,
    onClearList: PropTypes.func,
};

Clear.defaultProps = {
    text: "очистить",
    onClearList: () => {},
};