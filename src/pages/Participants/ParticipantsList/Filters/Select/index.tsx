// funções
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { sort } from '@/utils/sort'
import { participants } from '@/utils/participants'

// componentes
import { StyledButton } from './styles'

// ícones
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

// actions
import { setParticipants } from '@/app/reducers/participantReducer'
import { setSelectedOption } from '@/app/reducers/appReducer'

// states globais
import { selectSelectedOption } from '@/app/reducers/appReducer'
import { selectParticipants } from '@/app/reducers/participantReducer'

const Select = () => {
    // states globais
    const dispatch = useAppDispatch()
    const participantsState = useAppSelector(selectParticipants)
    const selectedOption = useAppSelector(selectSelectedOption)

    // states
    const [selectOptDisplay, setSelectOptDisplay] = useState<boolean>(false)

    // opções de ordenação
    const selectOpts = ['A-Z', 'Z-A']

    // faz a ordenação do array
    const ordenateHandle = (opt: string) => {
        dispatch(setSelectedOption(opt))
        if (opt) {
            const ordenatedArray = sort(participantsState, opt)
            dispatch(setParticipants(ordenatedArray))
        } else {
            dispatch(setParticipants(participants()))
        }
    }

    return (
        <StyledButton
            id='select'
            onClick={() => setSelectOptDisplay(!selectOptDisplay)}
            onBlur={() => setSelectOptDisplay(false)}
            $optsDisplay={selectOptDisplay}
        >
            <ul style={{ display: selectOptDisplay ? 'flex' : 'none' }}>
                <li onClick={() => ordenateHandle('')}>Sem filtro</li>
                {selectOpts.map((opt) => (
                    <li key={opt} onClick={() => ordenateHandle(opt)}>
                        {opt}
                    </li>
                ))}
            </ul>
            {selectedOption ? selectedOption : 'Sem filtro'}
            {selectOptDisplay ? (
                <IoIosArrowUp size={20} />
            ) : (
                <IoIosArrowDown size={20} />
            )}
        </StyledButton>
    )
}

export default Select
