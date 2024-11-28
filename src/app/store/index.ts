// funções
import { configureStore } from '@reduxjs/toolkit'
import { participantReducer } from '../reducers/participantReducer'
import { appReducer } from '../reducers/appReducer'
import { drawReducer } from '../reducers/drawReducer'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    app: appReducer,
    participant: participantReducer,
    draw: drawReducer,
})

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
