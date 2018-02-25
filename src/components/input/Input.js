import blacklist from 'blacklist';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


export class Input extends React.Component {
    render() {
        const { className } = this.props;
        const otherProps = blacklist(this.props, 'className');

        return <input className={`input ${className}`} {...otherProps} />;
    }
}
Input.defaultProps = {
    className: '',
    type: 'text',
};
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'button',
        'checkbox',
        'password',
        'radio',
        'reset',
        'submit',
        'text',
    ]),
};