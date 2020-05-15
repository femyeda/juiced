import {GetStaticProps, NextPage} from 'next'

type Props = {
  error?: string
}

const <%= upperPageName%>Page: NextPage<Props> = () => {
  return (
    <h1>New Page 👋</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {props: { }}
}

export default <%= upperPageName%>Page
