// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

// tipagem dos props
interface DivProps {
    readonly $display: boolean
}

const StyledDiv = styled.div<DivProps>`
    ${flex('row', 'center', 'center')}
    display: ${(props) => (props.$display ? 'flex' : 'none')};
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
`

export { StyledDiv }
