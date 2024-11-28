// funções
import { useState } from 'react'

// componentes
import { StyledLi } from './styles'
import Dropdown from './Dropdown'

// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'

// ícones
import { IoEllipsisVerticalSharp } from 'react-icons/io5'

// tipagem dos props
interface ParticipantItemProps extends IParticipant {}

const ParticipantItem = ({ id, name }: ParticipantItemProps) => {
    // states
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

    return (
        <StyledLi>
            <p>{name}</p>
            <button
                onClick={() => setIsDropdownVisible(true)}
                className='item__menu-btn'
            >
                <IoEllipsisVerticalSharp size={24} />
            </button>
            <Dropdown
                display={isDropdownVisible}
                setIsDropdownVisible={setIsDropdownVisible}
                id={id}
                name={name}
            />
        </StyledLi>
    )
}

export default ParticipantItem
