import { useState, useEffect } from 'react'
import root from 'root'

const useKeyboardSensor = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false)

  useEffect(
    () => {
      if (/iP(hone|ad|od)|Android/i.test(navigator.userAgent)) {

        const handleFocusIn = () => {
          setKeyboardOpen(true)
        }

        const handleFocusOut = () => {
          setKeyboardOpen(false)
        }

        root.addEventListener('focusin', handleFocusIn)
        root.addEventListener('focusout', handleFocusOut)

        return () => {
          root.removeEventListener('focusin', handleFocusIn)
          root.removeEventListener('focusout', handleFocusOut)
        }
      }
    },
    [ setKeyboardOpen ]
  )

  return keyboardOpen
}

export default useKeyboardSensor
