import React from 'react';
import PropTypes from 'prop-types';

const Item = ( {arr, onClick, onToggle} ) => {
    const classList = ["itemList"];
    if (arr.itemCheck) {
        classList.push("check");
    }
    return (
        <li className={classList.join(" ")}
            onClick={() => onToggle(arr.itemKey, arr.itemCheck)}>
            <span>{arr.itemName}</span>
            <span>{arr.itemQuantity + "шт"}</span>
            <span>{arr.itemPrice + "р"}</span>
            <button type="button"
                    className="btn -delete"
                    onClick={ () => onClick(arr.itemKey)}
            ></button>
        </li>
    );
}

export default Item;

Item.propTypes = {
    arr: PropTypes.object,
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
}

Item.defaultProps = {
    arr: {},
    onClick: () => {},
    onToggle: () => {},
}