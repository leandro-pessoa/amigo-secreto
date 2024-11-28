// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

const StyledDiv = styled.div`
    ${flex('column', 'auto', 'auto', '.7rem')}

    label {
        margin-left: 0.5rem;
    }
`

export { StyledDiv }
