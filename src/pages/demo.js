import React, { Fragment } from 'react'
import Editor from 'blocks-ui'
import * as Blocks from '@blocks/react'

import SEO from '../components/seo'

const JSX = `
import React from 'react'
import { Blocks, HeaderBasic } from '@blocks/react'

export default () => (
  <Blocks.Root>
  <StepFlow>
  <StepFlow.ProgressBar progress="30" />
  <StepFlow.Header>Let's get to know you.</StepFlow.Header>
  <StepFlow.Form>
    <StepFlow.FormField label="Legal Business Name" />
    <StepFlow.FormField label="Email" />
    <StepFlow.FormField label="Age" />
  </StepFlow.Form>
  <StepFlow.Nav>
    <StepFlow.Button buttonType="secondary">Previous</StepFlow.Button>
    <StepFlow.Button buttonType="primary">Next</StepFlow.Button>
  </StepFlow.Nav>
</StepFlow>    <StepFlow>
<StepFlow.ProgressBar progress="30" />
<StepFlow.Header>Let's get to know you.</StepFlow.Header>
<StepFlow.Form>
  <StepFlow.FormField label="Legal Business Name" />
  <StepFlow.FormField label="Email" />
  <StepFlow.FormField label="Age" />
</StepFlow.Form>
<StepFlow.Nav>
  <StepFlow.Button buttonType="secondary">Previous</StepFlow.Button>
  <StepFlow.Button buttonType="primary">Next</StepFlow.Button>
</StepFlow.Nav>
</StepFlow>
  </Blocks.Root>
)
`

const Layout = (props) => {
  return <div className="layout">{props.children}</div>
}

const Demo = () => (
  <Fragment>
    <SEO title="Demo" />
    <Editor src={JSX} blocks={Blocks} layout={Layout} />
  </Fragment>
)

export default Demo
