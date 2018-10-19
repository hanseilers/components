import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TestButton = ({
  accessibilityLabel,
  children,
  disabled = false,
  href,
  name,
  onClick = () => null,
  color = 'primary',
  type = 'submit',
  variant = 'contained',
}) => {
  if (href) {
    return (
      <a
        href={href}
        name={name}
        className={classNames('link', color)}
        disabled={disabled}
        onClick={onClick}
        aria-label={accessibilityLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      name={name}
      className={classNames(variant, color)}
      disabled={disabled}
      onClick={onClick}
      aria-label={accessibilityLabel}
    >
      {children}
    </button>
  );
};

TestButton.propTypes = {
  /** A label added to the button for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** This will contain text and/or an icon */
  children: PropTypes.node.isRequired,

  /** Setting disabled to true will render a disabled button */
  disabled: PropTypes.bool,

  /** Providing a 'href' will render an '<a>; element, _styled_ as a button */
  href: PropTypes.string,

  /** When provided, the name attribute will be set to identify the button */
  name: PropTypes.string,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,

  /** When provided, the button will be displayed with a different color */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
  ]),

  /** The variant of the button */
  variant: PropTypes.oneOf([
    'contained',
    'outlined',
    'text',
  ]),

  /* The type of button */
  type: PropTypes.oneOf([
    'submit',
    'button',
    'reset',
  ]),
};

export default TestButton;
