// funções
import { useAppDispatch } from '.'
import { participants } from '@/utils/participants'

// actions
import { setParticipants } from '../reducers/participantReducer'
import { emptyList } from '../reducers/drawReducer'
import { reloadToBeDrawn } from '../reducers/drawReducer'

export const useReloadDrawn = () => {
    // states globais
    const dispatch = useAppDispatch()

    return () => {
        dispatch(setParticipants(participants()))
        dispatch(emptyList())
        dispatch(reloadToBeDrawn())
    }
}
