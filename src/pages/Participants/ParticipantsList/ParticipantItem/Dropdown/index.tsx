// funções
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useAppDispatch } from '@/app/hooks'

// componentes
import { StyledDiv } from './styles'

// actions
import {
    setEditingParticipant,
    setRemovingParticipant,
} from '@/app/reducers/participantReducer'
import { changeModalType } from '@/app/reducers/appReducer'

// ícones
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'

// variáveis
import { variables } from '@/variables'
import { toggleModalDisplay } from '@/app/reducers/appReducer'

// tipagem dos props
interface DropdownProps {
    display: boolean
    setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
    id: string
    name: string
}

const Dropdown = ({
    display,
    setIsDropdownVisible,
    id,
    name,
}: DropdownProps) => {
    // states globais
    const dispatch = useAppDispatch()

    // constantes
    const ref = useRef<HTMLDivElement>(null)

    // fecha o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (ref.current && !ref.current.contains(target)) {
                setIsDropdownVisible(false)
            }
        }

        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [setIsDropdownVisible])

    // seleciona o participante a ser editado e muda o display do modal
    const editModalHandle = () => {
        dispatch(setEditingParticipant({ id: id, name: name }))
        dispatch(changeModalType('edit'))
        dispatch(toggleModalDisplay(true))
    }

    // abre o modal de exclusão
    const removeModalHandle = () => {
        dispatch(changeModalType('remove'))
        dispatch(setRemovingParticipant(id))
        dispatch(toggleModalDisplay(true))
    }

    return (
        <StyledDiv
            style={{ display: display ? 'flex' : 'none' }}
            ref={ref}
            data-testid='dropdown'
        >
            <div className='item__dropdown'>
                <button
                    onClick={() => editModalHandle()}
                    data-testid='edit-btn'
                >
                    <p>Editar</p>
                    <MdEdit size={24} color={variables.lightOrange} />
                </button>
                <button
                    onClick={() => removeModalHandle()}
                    data-testid='delete-btn'
                >
                    <p>Exlcuir</p>
                    <MdDelete size={24} color={variables.red} />
                </button>
            </div>
        </StyledDiv>
    )
}

export default Dropdown
