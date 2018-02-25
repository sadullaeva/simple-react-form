import blacklist from 'blacklist';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


export class Label extends React.Component {
    render() {
        const { className, value } = this.props;
        const otherProps = blacklist(this.props, 'className');

        return (
            <label className={`label ${className}`} {...otherProps}>
                {value}
            </label>
        );
    }
}
Label.defaultProps = {
    className: '',
    value: '',
};
Label.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
};