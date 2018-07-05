import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ onClick }) => (

  <button
    onClick= {onClick}
    style={{float:'right'}}
  >
    Delete
  </button>
)
Delete.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Delete
