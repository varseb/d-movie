import { useState, useEffect } from 'react'
import LayerGroup from 'component/Layout/Layer/Group'
import Layer from 'component/Layout/Layer'

const OfflineLayer = ({ toast, closeToast }) => {
  const [offline, setOffline] = useState(false)

  useEffect(
    () => {
      const handleOffline = () => setOffline(true)
      const handleOnline = () => setOffline(false)

      window.addEventListener('offline', handleOffline)
      window.addEventListener('online', handleOnline)

      return () => {
        window.removeEventListener('offline', handleOffline)
        window.removeEventListener('online', handleOnline)
      }
    },
    [ setOffline ]
  )

  return (
    <LayerGroup>
      {offline && (
        <Layer active namespace="ui-offline-layer">
          <div className="ui-offline" />
        </Layer>
      )}
    </LayerGroup>
  )
}

export default OfflineLayer
