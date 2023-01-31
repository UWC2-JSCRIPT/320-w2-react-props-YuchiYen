import PropTypes from "prop-types"
import React from 'react'

function Title({ titleName }) {
  return (
    <>
      <h1>
        {titleName}
      </h1>
    </>
  );
}

Title.propTypes = {
  titleName: PropTypes.string.isRequired
}

export default Title;