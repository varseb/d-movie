import React from 'react'
import LayerGroup from 'component/Layout/Layer/Group'
import Layer from 'component/Layout/Layer'
import Toast from './Toast'
import { connect, action } from 'redux/app'

const ToastLayer = ({ toast, closeToast }) => (
  <LayerGroup>
    {toast.open && (
      <Layer active={true} namespace="ui-toast-layer">
        <Toast
          message={toast.message}
          closeToast={closeToast}
        />
      </Layer>
    )}
  </LayerGroup>
)

export default connect(
  ({ layout }) => ({
    toast: layout.toast
  }),
  {
    closeToast: action.layout.closeToast
  },
  ToastLayer
)
