import classnames from 'classnames'
import Header from 'component/Layout/Header'
import StackLayer from 'component/Layout/Stack/Layer'
import ToastLayer from 'component/Layout/Toast/Layer'
import OfflineLayer from 'component/Layout/Offline/Layer'
import { connect } from 'redux/app'

const Layout = ({ stackOpen, hasVideoStack, playingVideo, children }) => (
  <>
    <main className={classnames('ui-main', {
      'stack-open': stackOpen,
      'playing-video': playingVideo,
      'has-video-stack': hasVideoStack
    })}>
      <div className="ui-main-header">
        <Header />
      </div>

      <div className="ui-main-content">
        {children}
      </div>
    </main>

    <StackLayer />

    <ToastLayer />

    <OfflineLayer />
  </>
)

export default connect(
  ({ layout }) => ({
    stackOpen: layout.stack.length > 0,
    playingVideo: layout.playingVideo,
    hasVideoStack: layout.stack.find(({ namespace }) => namespace === 'video')
  }),
  null,
  Layout
)
