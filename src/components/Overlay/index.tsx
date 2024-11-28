// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import { StyledDiv } from './styles'

// tipagens externas
import { ReactElement } from 'react'

// states globais
import { selectModalDisplay } from '@/app/reducers/appReducer'

// tipagem dos props
interface OverlayProps {
    children: ReactElement | ReactElement[] | string
}

const Overlay = ({ children }: OverlayProps) => {
    // states globais
    const modalDisplay = useAppSelector(selectModalDisplay)

    return <StyledDiv $display={modalDisplay}>{children}</StyledDiv>
}

export default Overlay
