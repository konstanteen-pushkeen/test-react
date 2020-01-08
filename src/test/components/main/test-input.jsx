import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className="block -input">
            <input  className="inputText" 
                    placeholder="продукт/количество/цена" 
                    onChange={props.onChange}
                    value={props.value}/>
            <button type="button" 
                    className="btn -add" 
                    onClick={props.onClick}>{props.text}</button>
        </div>
    );
}

export default Input;

Input.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    text: PropTypes.string,
    value: PropTypes.string,
};

Input.defaultProps = {
    onChange: () => {},
    onClick: () => {},
    text: "добавить",
    value: ""
};