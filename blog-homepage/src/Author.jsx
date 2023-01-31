import PropTypes from "prop-types"
import React from 'react'

function Author({ authorInfo }) {
  return (
    <div>
      <img src={authorInfo.image} alt='' />
      {authorInfo.name}
    </div>
  )
}

Author.propTypes = {
  authorInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}


export default Author;