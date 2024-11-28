// funções
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { participants } from '@/utils/participants'

// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'
import { RootState } from '../store'

// tipagem dos states
interface States {
    drawnList: IParticipant[]
    toBeDrawn: IParticipant[]
}

const initialState: States = {
    drawnList: [],
    toBeDrawn: participants(),
}

// declaração do slice
const drawSlice = createSlice({
    name: 'draw',
    initialState,
    reducers: {
        addParticipant: (state, action: PayloadAction<IParticipant>) => {
            state.drawnList = [...state.drawnList, action.payload]
        },
        emptyList: (state) => {
            state.drawnList = []
        },
        removeDrawnParticipant: (state, action: PayloadAction<string>) => {
            state.toBeDrawn = state.toBeDrawn.filter(
                (participant) => participant.id !== action.payload,
            )
        },
        reloadToBeDrawn: (state) => {
            state.toBeDrawn = participants()
        },
    },
})

// export das actions
export const {
    addParticipant,
    emptyList,
    removeDrawnParticipant,
    reloadToBeDrawn,
} = drawSlice.actions

// export do reducer
export const drawReducer = drawSlice.reducer

// export dos states
export const selectDrawnList = (state: RootState) => state.draw.drawnList
export const selectToBeDrawn = (state: RootState) => state.draw.toBeDrawn
