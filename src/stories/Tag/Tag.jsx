import React from 'react';
import PropTypes from 'prop-types';

export const Tag = ({ color, label, ...props }) => {
    return (
        <span style={{
            border: `1px solid ${color}`,
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "transparent",
            color: color
        }}
            {...props}>
            {label}
        </span>
    )
}

Tag.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
}

Tag.defaultProps = {
    color: null,
    // label: PropTypes.string,
};
