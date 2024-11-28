// funções
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import setStorage from '@/utils/setStorage'
import { participants } from '@/utils/participants'

// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'
import { RootState } from '../store'

// tipagem dos states
interface States {
    participants: IParticipant[]
    editingParticipant: IParticipant
    removingParticipant: string
}

// iniciais dos states
const initialState: States = {
    participants: participants(),
    editingParticipant: { id: '', name: '' },
    removingParticipant: '',
}

// slice
const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        addParticipant: (state, action: PayloadAction<IParticipant>) => {
            setStorage([...state.participants, action.payload])
            state.participants = [...state.participants, action.payload]
        },
        setRemovingParticipant: (state, action: PayloadAction<string>) => {
            state.removingParticipant = action.payload
        },
        removeParticipant: (state, action: PayloadAction<string>) => {
            state.participants = participants().filter(
                (participant) => participant.id !== action.payload,
            )
            setStorage(state.participants)
        },
        setEditingParticipant: (
            state,
            action: PayloadAction<{ id: string; name: string }>,
        ) => {
            state.editingParticipant = action.payload
        },
        editParticipant: (
            state,
            action: PayloadAction<{ id: string; name: string }>,
        ) => {
            state.participants = participants().map((participant) => {
                if (participant.id === action.payload.id) {
                    participant.name = action.payload.name
                }
                return participant
            })
            setStorage(state.participants)
        },
        removeAll: (state) => {
            state.participants = []
            setStorage([])
        },
        setParticipants: (state, action: PayloadAction<IParticipant[]>) => {
            state.participants = action.payload
        },
        showAll: (state) => {
            state.participants = participants()
        },
    },
})

// export das actions
export const {
    addParticipant,
    setRemovingParticipant,
    removeParticipant,
    setEditingParticipant,
    editParticipant,
    removeAll,
    setParticipants,
    showAll,
} = participantSlice.actions

// export do reducer
export const participantReducer = participantSlice.reducer

// export dos states
export const selectParticipants = (state: RootState) =>
    state.participant.participants
export const selectEditingParticipant = (state: RootState) =>
    state.participant.editingParticipant
export const selectRemovingParticipant = (state: RootState) =>
    state.participant.removingParticipant
