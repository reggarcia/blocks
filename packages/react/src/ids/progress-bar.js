/** @jsx jsx */
import { jsx } from 'theme-ui'
import loadable from '@loadable/component'
import { ControlType, applyPropertyControls } from 'property-controls'

const ProgressBar = loadable(() => import('@ids/progress-bar'))

const IDSProgressBar = ({ theme, progress }) => {
  return <ProgressBar progress={progress} theme={theme} />
}

applyPropertyControls(IDSProgressBar, {
  theme: {
    title: 'Theme',
    type: ControlType.Enum,
    defaultValue: 'intuit',
    options: ['intuit', 'quickbooks', 'turbotax']
  },
  progress: {
    type: ControlType.Number
  }
})

IDSProgressBar.usage = `<IDSProgressBar progress="30"/>`

export default IDSProgressBar
