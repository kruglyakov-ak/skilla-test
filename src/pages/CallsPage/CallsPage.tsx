import { FC } from 'react'
import { CallsSort, Layout } from '../../features'
import { useGetCallsQuery } from '../../services/api'

export const CallsPage: FC = () => {
  const { data } = useGetCallsQuery('')
  console.log(data)
  return (
    <Layout>
      <CallsSort />
    </Layout>
  )
}
