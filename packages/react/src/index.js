import React from 'react'
export { default as IDSButton } from './ids/button'
export { default as IDSProgressBar } from './ids/progress-bar'
export { default as IDSTextField } from './ids/text-field'
export { default as StepFlow } from './ids/step-flow'
// HEADERS
export { default as HeaderBasic } from './headers/basic'
export { default as HeaderLogo } from './headers/logo'
export { default as HeaderLogo2 } from './headers/logo2'

// QUOTES
export { default as QuoteBasic } from './quotes/basic'

// TAGLINES
export { default as TaglineContent } from './taglines/content'
export { default as TaglineBold } from './taglines/bold'

// FOOTERS
export { default as FooterBasic } from './footers/basic'

export const Blocks = {
  Root: ({ layout: Layout = React.Fragment, ...props }) => {
    return <Layout {...props} />
  }
}
