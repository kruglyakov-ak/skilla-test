import { FC } from 'react'
import { CallsSort, Layout } from '../../features'
import { api } from '../../services/api'

export const CallsPage: FC = () => {
  const { data } = api.endpoints.getCalls.useQuery('')
  console.log(data);
  return (
    <Layout>
      <CallsSort />
    </Layout>
  )
}
