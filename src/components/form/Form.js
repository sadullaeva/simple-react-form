import blacklist from 'blacklist';
import PropTypes from 'prop-types';
import React from 'react';


export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    switch (event.target.type) {
      case 'checkbox':
        this.setState({ [event.target.name]: event.target.checked });
        break;
      default:
        this.setState({ [event.target.name]: event.target.value });
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(event, this.state);
    }
  };

  render() {
    const { className, children } = this.props;
    const otherProps = blacklist(this.props,
      'children',
      'className',
      'onSubmit',
      'onChange',
    );

    return (
      <form className={`input ${className}`}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            {...otherProps}
      >
        {children}
      </form>
    )
  }
}
Form.defaultProps = {
  children: null,
  className: '',
  onChange: undefined,
  onSubmit: undefined,
};
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};