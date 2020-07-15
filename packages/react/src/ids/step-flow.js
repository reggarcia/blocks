/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from 'styled-components'
import loadable from '@loadable/component'
import { ControlType, applyPropertyControls } from 'property-controls'

const ProgressBar = loadable(() => import('@ids/progress-bar'))
const TextField = loadable(() => import('@ids/text-field'))
const Button = loadable(() => import('@ids/button'))

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Form = styled.div`
  margin: 30px;
`
const StepFlow = ({ justifyContent = 'space-between', ...props }) => {
  return (
    <section
      sx={{
        variant: 'styles.header',
        display: 'flex',
        flexFlow: 'column',
        justifyContent
      }}
      {...props}
    />
  )
}

StepFlow.ProgressBar = ({ progress, theme }) => {
  return <ProgressBar progress={progress} theme={theme} />
}
StepFlow.Header = ({ children }) => {
  return <h1>{children}</h1>
}
StepFlow.Form = ({ children }) => {
  return <Form>{children}</Form>
}
StepFlow.FormField = ({ theme, label, placeholder }) => {
  return <TextField theme={theme} label={label} placeholder={placeholder} />
}

StepFlow.Nav = (props) => {
  return <Nav {...props} />
}
StepFlow.Button = ({ children, theme, buttonType }) => {
  return (
    <Button buttonType={buttonType} theme={theme}>
      {children}
    </Button>
  )
}

applyPropertyControls(StepFlow, {
  justifyContent: {
    type: ControlType.Enum,
    defaultValue: 'right',
    options: ['space-between', 'start', 'space-evenly']
  },
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(StepFlow.ProgressBar, {
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

applyPropertyControls(StepFlow.Nav, {
  justifyContent: {
    type: ControlType.Enum,
    defaultValue: 'right',
    options: ['space-between', 'start', 'space-evenly']
  },
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(StepFlow.Form, {
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(StepFlow.FormField, {
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
  },
  sx: {
    type: ControlType.Style
  }
})

const buttonConfig = {
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
  },
  sx: {
    type: ControlType.Style
  }
}

applyPropertyControls(StepFlow.Button, buttonConfig)

StepFlow.usage = `
  <StepFlow>
    <StepFlow.ProgressBar progress="30"/>
    <StepFlow.Header>Let's get to know you.</StepFlow.Header>
    <StepFlow.Form>
        <StepFlow.FormField label="Name"/>
        <StepFlow.FormField label="Email"/>
        <StepFlow.FormField label="Age"/>
    </StepFlow.Form>
    <StepFlow.Nav>
      <StepFlow.Button buttonType="secondary">Previous</StepFlow.Button>
      <StepFlow.Button buttonType="primary">Next</StepFlow.Button>
    </StepFlow.Nav>
  </StepFlow>
`

export default StepFlow
