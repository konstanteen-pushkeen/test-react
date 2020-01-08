import React from 'react';
import PropTypes from 'prop-types';
import Item from './test-item';

const List = (props) => {
    return (
        <div className="block -list">
            <ul className="list">{
                props.arr.map((arr) => {
                    return <Item arr={arr}
                                 onClick={props.onClick}
                                 onToggle={props.onToggle} />
                })
            }
            </ul>
        </div>
    );
}

export default List;

List.propTypes = {
    arr: PropTypes.array,
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
}

List.defaultProps = {
    arr: [],
    onClick: () => {},
    onToggle: () => {},
}