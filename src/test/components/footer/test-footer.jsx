import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <footer>
            <div className="block -footer">
                <span className="totalPrice">{props.text}</span>
                <span className="totalValue">{props.totalPrice}{"p"}</span>
            </div>
        </footer>
    );
}

export default Footer;

Footer.propTypes = {
    text: PropTypes.string,
    totalPrice: PropTypes.number,
};

Footer.defaultProps = {
    text: "итого",
    totalPrice: "0",
};