import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Call } from '../types/call'

type CallsResponse = {
  total_rows: string
  results: Call[]
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.skilla.ru/mango/getList',
  prepareHeaders: headers => {
    headers.set('Authorization', `Bearer testtoken`)
    return headers
  },
})

export const api = createApi({
  reducerPath: 'callsApi',
  baseQuery: baseQuery,
  endpoints: build => ({
    getCalls: build.query<
      CallsResponse,
      {
        date_start: string
        date_end: string
        in_out: string
        source?: string
      }
    >({
      query({ date_start, date_end, in_out, source }) {
        return {
          url: `?date_start=${date_start}&date_end=${date_end}${
            in_out && `&in_out=${in_out}`
          }${source && `&sources=[${source}]`}`,
          method: 'POST',
          body: {},
        }
      },
    }),
  }),
})

export const { useGetCallsQuery } = api
