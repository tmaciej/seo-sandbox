import React, { Component, PropTypes } from 'react';
import history from '../../core/history';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired
  };

  static defaultProps = {
    onClick: () => {}
  };

  onClick = (event) => {
    this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    history.push(this.props.href);
  }

  render() {
    const {
      children,
      href,
      ...rest
    } = this.props;

    return (
      <a {...rest} href={href} onClick={this.onClick}>{children}</a>
    );
  }
}

export default Link;
