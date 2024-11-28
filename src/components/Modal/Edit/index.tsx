// funções
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { error, success } from '@/utils/feedbacks'
import { useEffect, useState } from 'react'
import { useReloadDrawn } from '@/app/hooks/useReloadDrawn'

// actions
import { editParticipant } from '@/app/reducers/participantReducer'

// states globais
import { selectEditingParticipant } from '@/app/reducers/participantReducer'
import { selectModalDisplay } from '@/app/reducers/appReducer'

// componentes
import { StyledDiv } from './styles'
import { toggleModalDisplay } from '@/app/reducers/appReducer'
import Modal from '..'
import Input from '@/components/Input'

const Edit = () => {
    // states globais
    const editingParticipant = useAppSelector(selectEditingParticipant)
    const modalDisplay = useAppSelector(selectModalDisplay)
    const dispatch = useAppDispatch()

    // states
    const [name, setName] = useState<string>('')

    // constantes
    const reloadDrawn = useReloadDrawn()

    // edita o nome do participante caso o valor do input seja válido
    const editHandle = () => {
        if (!name) {
            error('Preencha o campo solicitado.')
            return
        }
        if (name.trim().length < 3) {
            error('Um nome deve conter 3 ou mais letras.')
            return
        }
        dispatch(editParticipant({ ...editingParticipant, name: name.trim() }))
        dispatch(toggleModalDisplay(false))
        success(`Participante editado com sucesso!`)
        reloadDrawn()
    }

    // esvazia o input toda vez que o display do modal se alterar
    useEffect(() => {
        setName('')
    }, [modalDisplay])

    return (
        <Modal
            title='Editar'
            acceptTxt='Editar'
            cancelTxt='Cancelar'
            func={() => editHandle()}
        >
            <StyledDiv data-testid='edit-modal'>
                <label htmlFor='name'>
                    Escolha um novo nome para {editingParticipant.name}:
                </label>
                <Input
                    placeholder='Digite aqui'
                    value={name}
                    setValue={setName}
                    id='name'
                />
            </StyledDiv>
        </Modal>
    )
}

export default Edit
