import React from 'react'
import './LoadingSpinner.css'

export const LoadingSpinner = (props) => {
  return (
    <div className="loadingSpinner">
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner



