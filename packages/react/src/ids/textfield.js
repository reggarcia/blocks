/** @jsx jsx */
import { jsx } from 'theme-ui'
import TextField from '@ids/text-field'
import { ControlType, applyPropertyControls } from 'property-controls'

const IDSTextField = ({ theme, label, placeholder }) => {
  return <TextField theme={theme} label={label} size={placeholder} />
}

applyPropertyControls(IDSTextField, {
  theme: {
    title: 'Theme',
    type: ControlType.Enum,
    defaultValue: 'intuit',
    options: ['intuit', 'quickbooks', 'turbotax']
  },
  label: {
    type: ControlType.String
  },
  placeholder: {
    type: ControlType.String
  }
})

IDSTextField.usage = `<IDSTextField label="IDS TextField"/>`

export default IDSTextField
