import PropTypes from "prop-types"
import React from 'react'

function MinutesToRead({ minutes }) {
  return (
    <>
      <div>
        minutes to read: {minutes}
      </div>
    </>
  );
}

MinutesToRead.propTypes = {
  minutes: PropTypes.number.isRequired
}

export default MinutesToRead;