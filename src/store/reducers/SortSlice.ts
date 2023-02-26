import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

interface SortState {
  callType: string
  startDate: string
  endDate: string
  source: string
}

const initialState: SortState = {
  callType: '',
  startDate: dayjs(Date.now()).subtract(3, 'd').format('YYYY-MM-DD'),
  endDate: dayjs(Date.now()).format('YYYY-MM-DD'),
  source: 'empty',
}

export const sortSlice = createSlice({
  name: 'sortSettings',
  initialState,
  reducers: {
    setCallType(state, action: PayloadAction<string>) {
      if (action.payload === 'Входящие') {
        state.callType = '1'
      } else if (action.payload === 'Исходящие') {
        state.callType = '0'
      } else {
        state.callType = ''
      }
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload
    },
    setCallSource(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case 'Все источники':
          state.source = 'empty'
          break
        case 'С сайта':
          state.source = 'from_site'
          break
        case 'yandex номер':
          state.source = 'yandex'
          break
        case 'google номер':
          state.source = 'google'
          break
      }
    },
  },
})

export default sortSlice.reducer
