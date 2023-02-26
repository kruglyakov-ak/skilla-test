import { FC } from 'react'
import { CallsSort, Layout } from '../../features'
import { useAppSelector } from '../../hooks/redux'
import { useGetCallsQuery } from '../../services/api'

export const CallsPage: FC = () => {
  const { callType } = useAppSelector(state => state.sort)
  const { data, isLoading, error } = useGetCallsQuery({ in_out: callType })
  console.log(data?.results)
  return (
    <Layout>
      <CallsSort />
      {/* <CallsTable class={data} isLoading={isLoading} error={error}/> */}
    </Layout>
  )
}
