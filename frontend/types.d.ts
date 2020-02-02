namespace NodeJS {
  interface Global {
    document: Document
    window: Window
    navigator: Navigator
    localStorage: Storage
  }
}

// Override default props
namespace JSX {
  interface IntrinsicAttributes extends React.Attributes {
    id?: string
    className?: string
    style?: CSSProperties
    onClick?: (...args: any) => any
  }
}

// HTML Element default props
// Use as HTML['div'] or HTML['input']
interface HTML extends JSX.IntrinsicElements {}

declare module '*.svg'
