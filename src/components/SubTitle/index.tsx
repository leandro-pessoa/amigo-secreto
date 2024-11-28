// componentes e tipagens
import { ReactElement } from 'react'
import { StyledH2 } from './styles'

// tipagem dos props
interface SubTitleProps {
    children: ReactElement | ReactElement[] | string
}

const SubTitle = ({ children }: SubTitleProps) => {
    return <StyledH2>{children}</StyledH2>
}

export default SubTitle
