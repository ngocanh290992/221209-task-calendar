import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'
import { CalendarReducer } from './reducers/CalendarReducer'
import { DateReducer } from './reducers/DateReducer'
import { EventsReducer } from './reducers/EventsReducer'

const rootReducer = combineReducers({
    EventsReducer,
    DateReducer,
    CalendarReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))