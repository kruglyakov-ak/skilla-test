import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Call {
  id: number
  partnership_id: string
  partner_data: {
    id: string
    name: string
    phone: string
  }
  date: string
  date_notime: string
  time: number
  from_number: string
  from_extension: string
  to_number: string
  to_extension: string
  is_skilla: number
  status: string
  record: string
  line_number: string
  in_out: number
  from_site: number
  source: string
  errors: string[]
  disconnect_reason: string
  results: [
    {
      type: string
      title: string
      tooltip: string
    }
  ]
  stages: []
  abuse: []
  contact_name: string
  contact_company: string
  person_id: number
  person_name: string
  person_surname: string
  person_avatar: string
}

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
    getCalls: build.query<CallsResponse, void>({
      query() {
        return {
          url: ``,
          method: 'POST',
          body: {},
        }
      },
    }),
  }),
})

export const { useGetCallsQuery } = api