import React from 'react';
import PropTypes from 'prop-types';

// A reuseable component for each section name
function SectionHead({ icon, title, className }) {
  return (
    <div className={`section__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

SectionHead.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SectionHead.defaultProps = {
  className: '',
};

export default SectionHead;
