// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useReloadDrawn } from '@/app/hooks/useReloadDrawn'

// componentes
import Modal from '..'

// actions
import { removeParticipant } from '@/app/reducers/participantReducer'
import { toggleModalDisplay } from '@/app/reducers/appReducer'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'
import { selectRemovingParticipant } from '@/app/reducers/participantReducer'

const Remove = () => {
    // states globais
    const dispatch = useAppDispatch()
    const participantsState = useAppSelector(selectParticipants)
    const removingParticipantId = useAppSelector(selectRemovingParticipant)

    // constantes
    const participant = participantsState.find(
        (p) => p.id === removingParticipantId,
    )
    const reloadDrawn = useReloadDrawn()

    // realiza as funções para a remoção do participante
    const removeHandle = () => {
        dispatch(removeParticipant(removingParticipantId))
        dispatch(toggleModalDisplay(false))
        reloadDrawn()
    }

    return (
        <Modal
            title='Excluir Participante'
            acceptTxt='Sim'
            cancelTxt='Não'
            func={() => removeHandle()}
        >
            <p data-testid='delete-modal'>
                Tem certeza que deseja excluir o participante com o nome{' '}
                {participant?.name}?
            </p>
        </Modal>
    )
}

export default Remove
