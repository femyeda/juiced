import React from 'react'
import clsx from 'clsx'

type Props = {
  children?: React.ReactNode[]
  classes?: string
} & React.PropsWithoutRef<React.HTMLProps<HTMLElement>>

const <%= name%>: React.FunctionComponent<Props> = (props: Props) => {

  return (
    <div className={clsx(
      props?.classes,
      '<%= name%>Component',
    )}
    {...props}>
      {props.children}
    </div>
  )
}

export default <%= name%>
