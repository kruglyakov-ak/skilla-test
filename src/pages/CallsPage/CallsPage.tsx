import { FC } from 'react'
import { CallsSort, CallsTable, Layout } from '../../features'
import { useAppSelector } from '../../hooks/redux'
import { useGetCallsQuery } from '../../services/api'

export const CallsPage: FC = () => {
  const { callType, startDate, endDate } = useAppSelector(state => state.sort)
  const { data, isLoading } = useGetCallsQuery({
    in_out: callType,
    date_start: startDate,
    date_end: endDate,
  })
  return (
    <Layout>
      <CallsSort />
      <CallsTable calls={data?.results} isLoading={isLoading} />
    </Layout>
  )
}
