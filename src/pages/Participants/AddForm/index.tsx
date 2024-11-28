// funções e tipagens
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import React, { useState } from 'react'
import { error } from '@/utils/feedbacks'
import { v4 as uuidv4 } from 'uuid'
import { useReloadDrawn } from '@/app/hooks/useReloadDrawn'

// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'

// actions
import { addParticipant } from '@/app/reducers/participantReducer'

// componentes
import { StyledForm } from './styles'

// states globai
import { selectParticipants } from '@/app/reducers/participantReducer'

const AddForm = () => {
    // states globais
    const dispatch = useAppDispatch()
    const participants = useAppSelector(selectParticipants)

    // states
    const [name, setName] = useState<string>('')

    // constantes
    const reloadDrawn = useReloadDrawn()

    // adiciona o participante à lista caso não seja repetido
    // e o nome tenha 3 ou mais letras
    const addHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const participant: IParticipant = {
            id: uuidv4(),
            name: name.trim(),
        }
        const participantsNames = participants.map((p) => p.name)

        if (name.trim().length < 3) {
            error('Um nome deve conter 3 ou mais letras.')
            return
        }
        if (participantsNames.includes(name)) {
            error(`O nome ${name} já foi adicionado.`)
            return
        }
        dispatch(addParticipant(participant))
        setName('')
        reloadDrawn()
    }

    return (
        <StyledForm onSubmit={(e) => addHandle(e)}>
            <input
                type='text'
                placeholder='Inserir participante'
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={15}
            />
            <button type='submit' disabled={name ? false : true}>
                Adicionar
            </button>
        </StyledForm>
    )
}

export default AddForm
