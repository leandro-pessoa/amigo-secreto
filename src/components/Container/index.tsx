// componentes
import { StyledDiv } from './styles'

// tipagens externas
import { ReactElement } from 'react'

// tipagem dos props
interface ContainerProps {
    children: ReactElement | ReactElement[] | string
}

const Container = ({ children }: ContainerProps) => {
    return <StyledDiv>{children}</StyledDiv>
}

export default Container
