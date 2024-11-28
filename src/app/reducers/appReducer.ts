// funções
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// tipagem dos states
interface States {
    modalDisplay: boolean
    modalType: string
    selectedOption: string
}

// iniciais dos states
const initialState: States = {
    modalDisplay: false,
    modalType: '',
    selectedOption: '',
}

// slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleModalDisplay: (state, action: PayloadAction<boolean>) => {
            state.modalDisplay = action.payload
        },
        changeModalType: (
            state,
            action: PayloadAction<
                'edit' | 'remove' | 'removeAll' | 'reloadDraw' | 'drawn'
            >,
        ) => {
            state.modalType = action.payload
        },
        setSelectedOption: (state, action: PayloadAction<string>) => {
            state.selectedOption = action.payload
        },
    },
})

// export das actions
export const { toggleModalDisplay, changeModalType, setSelectedOption } =
    appSlice.actions

// export do reducer
export const appReducer = appSlice.reducer

// exort dos states
export const selectModalDisplay = (state: RootState) => state.app.modalDisplay
export const selectModalType = (state: RootState) => state.app.modalType
export const selectSelectedOption = (state: RootState) =>
    state.app.selectedOption
