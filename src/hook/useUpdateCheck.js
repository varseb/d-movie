import { useState, useEffect } from 'react'

const useUpdateCheck = ( value ) => {
  const [current, setCurrent] = useState({
    value,
    original: value
  })

  useEffect(
    () => {
      if( value !== current.value ){
        setCurrent({ ...current, value })
      }
    },
    [ value, current, setCurrent ]
  )

  return value !== current.original
}

export default useUpdateCheck
