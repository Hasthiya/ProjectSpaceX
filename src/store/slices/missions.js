import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    missions: [],
  }

const missionsSlice  = createSlice({
    name: 'missions',
    initialState,
    reducers: {
        getMissions: state => {
          state.loading = true
        },
        getMissionsSuccess: (state, { payload }) => {
          state.missions = payload
          state.loading = false
          state.hasErrors = false
        },
        getMissionsFailure: state => {
          state.loading = false
          state.hasErrors = true
        },
      },
})

export const { getMissions, getMissionsSuccess, getMissionsFailure } = missionsSlice.actions;

export const missionsSelector = state => state.missions

export default missionsSlice.reducer;

export function fetchMissions() {
  return async dispatch => {
    dispatch(getMissions())

    try {
      const response = await fetch('https://api.spacex.land/rest/missions')
      const data = await response.json()

      dispatch(getMissionsSuccess(data))
    } catch (error) {
      dispatch(getMissionsFailure())
    }
  }
}