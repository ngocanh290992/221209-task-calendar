import { CHANGE_BG_COLOR } from "../types/CalendarTypes"

const initialState = {
   arrayDaysSelected: []
}

export const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_BG_COLOR: {
      const {daySelected} = action
      
      const jsonDaySelected = JSON.stringify(daySelected)
      
      let index = state.arrayDaysSelected.findIndex(day => JSON.stringify(day) === jsonDaySelected)
      let newArr = state.arrayDaysSelected
      if(index === -1){
        newArr.push(daySelected)
        
      }else{
        newArr.splice(index, 1)
      }
      state.arrayDaysSelected = newArr
      return {...state}
    }

  default:
    return state
  }
}
