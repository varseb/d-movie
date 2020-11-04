import React from 'react'

const Credits = ({ title, value }) => (
  <div className="ui-credits">
    <div className="ui-credits-title">
      {title}
    </div>
    <div className="ui-credits-value">
      {value}
    </div>
  </div>
)

export default Credits