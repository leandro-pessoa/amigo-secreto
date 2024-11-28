// componentes
import { ReactElement } from 'react'
import { StyledH1 } from './styles'

// tipagem dos props
interface TitleProps {
    children: ReactElement | ReactElement[] | string
}

const Title = ({ children }: TitleProps) => {
    return <StyledH1>{children}</StyledH1>
}

export default Title
