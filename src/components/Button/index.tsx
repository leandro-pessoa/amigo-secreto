// componentes e tipagens
import { ReactElement } from 'react'
import { StyledButton } from './styles'

// tipagem dos props
interface ButtonProps {
    children: ReactElement | ReactElement[] | string | (string | ReactElement)[]
    onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
