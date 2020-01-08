import React from 'react';
import PropTypes from 'prop-types';
import Clear from './test-clear';

const BTN_FILTERS = [

    {
        text: "название",
        id: "name",
        className: "btn -name",
    },
    {
        text: "количество",
        id: "quantity",
        className: "btn -quantity"
    },
    {
        text: "цена",
        id: "price",
        className: "btn -price"
    },

];

const Filters = ({ onClearList, onSortItem }) => {
    return (
        <div className="block -buttons">
            {
                BTN_FILTERS.map(({ text, id, className }) => {
                    return <button type="button"
                                   className={className}
                                   key={id}
                                   onClick={() => onSortItem(id)}>
                           {text}</button>
                })
            }
            <Clear text="очистить"
                onClearList={onClearList} />
        </div>
    );
}

export default Filters;

Filters.propTypes = {
    onClearList: PropTypes.func,
    onSortItem: PropTypes.func,
}

Filters.defaultProps = {
    onClearList: () => {},
    onSortItem: () => {},
}