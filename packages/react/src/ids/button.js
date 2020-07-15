/** @jsx jsx */
import { jsx } from 'theme-ui'
// import { Link } from '@theme-ui/components'
import Button from '@ids/button'
import { ControlType, applyPropertyControls } from 'property-controls'

const IDSButton = ({ children, theme, buttonType, size }) => {
  return (
    <Button theme={theme} buttonType={buttonType} size={size}>
      {children}
    </Button>
  )
}

applyPropertyControls(IDSButton, {
  children: {
    title: 'Text',
    type: ControlType.String
  },
  theme: {
    title: 'Theme',
    type: ControlType.Enum,
    defaultValue: 'intuit',
    options: ['intuit', 'quickbooks', 'turbotax']
  },
  buttonType: {
    title: 'Type',
    type: ControlType.Enum,
    defaultValue: 'intuit',
    options: [
      'primary',
      'secondary',
      'tertiary',
      'special',
      'destructive',
      'destructiveTertiary',
      'icon',
      'secondaryGhost'
    ]
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['mini', 'standard', 'responsive', 'jumbo']
  }
})

IDSButton.usage = `<IDSButton>IDS Button</IDSButton>`

export default IDSButton
