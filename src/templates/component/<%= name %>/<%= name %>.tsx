import React from 'react'
import clsx from 'clsx'

type Props = {
  children: any
  classes?: string
}

const <%= name%>: React.FunctionComponent<Props> = (props: Props) => {

  return (
    <div className={clsx(
      props?.classes,
      '<%= name%>Component',
    )}>
      {props.children}
    </div>
  )
}

export default <%= name%>
