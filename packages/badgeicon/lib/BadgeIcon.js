const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

const BadgeIcon = ({ icon: Icon, statusIcon: StatusIcon, className, styleIcon, styleStatusIcon, square, unit }) => {
  let iconStyles;
  if (unit || square) {
    const size = (unit) ? `calc( var(--unit) * ${unit} )` : square;
    iconStyles = { ...styleIcon, width: size, height: size };
  } else { iconStyles = styleIcon; }

  return (
    <div className={classNames('badge-icon', className)} style={iconStyles}>
      <Icon />
      {StatusIcon &&
        <div className="badge-icon__status" style={styleStatusIcon}>
          <StatusIcon />
        </div>
      }
    </div>
  );
};

BadgeIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  styleIcon: PropTypes.shape({}),
  statusIcon: PropTypes.element,
  styleStatusIcon: PropTypes.shape({}),
  square: PropTypes.string,
  unit: PropTypes.number,
  className: PropTypes.string,
};

BadgeIcon.defaultProps = {
  styleIcon: null,
  statusIcon: null,
  styleStatusIcon: null,
  square: null,
  unit: null,
  className: '',
};

module.exports = BadgeIcon;
