import React from 'react'
import moment from 'moment'

const Info = ({ releaseDate, originalLanguage, runTime }) => {
  const info = []

  if( releaseDate ){
    info.push(
      <span key={releaseDate}>
        {moment(releaseDate).format('Y')}
      </span>
    )
  }

  if( originalLanguage ){
    info.push(
      <span key={originalLanguage}>
        {originalLanguage.toUpperCase()}
      </span>
    )
  }

  if( runTime > 0 ){
    const h = Math.floor(runTime / 60)
    const m = Math.floor(runTime % 60 % 60)

    info.push(
      <span key={runTime} className="fade-in">
        {h > 0 && `${h}h`} {m > 0 && `${m}m`}
      </span>
    )
  }

  return (
    <div className="ui-info">
      {info.reduce((prev, curr) => [prev, ' / ', curr])}
    </div>
  )
}

export default Info
