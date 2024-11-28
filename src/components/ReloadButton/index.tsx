// componentes
import { StyledButton } from './styles'

// ícones
import { TbReload } from 'react-icons/tb'

// tipagem dos props
interface ReloadButtonProps {
    size: number
    onClick: () => void
    className?: string
}

const ReloadButton = ({ size, onClick, className }: ReloadButtonProps) => {
    return (
        <StyledButton onClick={onClick} className={className}>
            <TbReload size={size} />
        </StyledButton>
    )
}

export default ReloadButton
