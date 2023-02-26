import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

interface SortState {
  callType: string
  startDate: string
  endDate: string
}

const initialState: SortState = {
  callType: '',
  startDate: dayjs(Date.now()).subtract(3, 'd').format("YYYY-MM-DD"),
  endDate: dayjs(Date.now()).format("YYYY-MM-DD"),
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
    }
  },
})

export default sortSlice.reducer
