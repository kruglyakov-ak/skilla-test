import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SortState {
  callType: string
}

const initialState: SortState = { callType: '' }

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
  },
})

export default sortSlice.reducer
