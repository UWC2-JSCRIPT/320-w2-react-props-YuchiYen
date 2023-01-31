import PropTypes from "prop-types"
import React from 'react'

function PostedDate({date}) {
 const dt = new Date (date);
 const formattedDate = dt.toDateString();

  return (
   <>
    <div>
    {formattedDate}
    </div>
    </>
  );
}  

PostedDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default PostedDate;