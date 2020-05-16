import React from 'react'
import clsx from 'clsx'

type Props = {
  children: any
  classes?: string
  style?: React.CSSProperties
}

const <%= name%>: React.FunctionComponent<Props> = (props: Props) => {

  return (
    <div className={clsx(
      props?.classes,
      '<%= name%>Component',
    )}
    style={{...props?.style}}>
      {props.children}
    </div>
  )
}

export default <%= name%>
