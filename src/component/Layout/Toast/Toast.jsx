import React, { useEffect } from 'react'

const Toast = ({ message, closeToast }) => {

  useEffect(
    () => {
      const timer = setTimeout(closeToast, 4000)

      return () => {
        clearTimeout(timer)
      }
    },
    [ closeToast ]
  )

  return (
    <div key={message} className="ui-toast" onClick={closeToast}>
      <p className="ui-toast-message">
        {message}
      </p>
    </div>
  )
}

export default Toast
