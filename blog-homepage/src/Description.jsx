import PropTypes from "prop-types"
import React from 'react'

function Description({ descriptionContent }) {
  return (
    <>
      <p>
        {descriptionContent}
      </p>
    </>
  );
}

Description.propTypes = {
  descriptionContent: PropTypes.string.isRequired
}

export default Description;