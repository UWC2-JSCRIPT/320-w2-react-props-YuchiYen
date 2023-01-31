import PropTypes from "prop-types"
import React from 'react'

function HasAudioAvailable({ hasAudio }) {
  return hasAudio ? (<div>has Audio</div>) : (<div>has no Audio</div>)
}

HasAudioAvailable.propTypes = {
  hasAudio: PropTypes.bool.isRequired
}

export default HasAudioAvailable;