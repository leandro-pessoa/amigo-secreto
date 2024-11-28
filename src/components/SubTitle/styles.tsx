// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledH2 = styled.h2`
    font-size: 1.5rem;
    color: ${variables.orange};

    @media (max-width: ${variables.smartphone}) {
        font-size: 1.3rem;
    }
`

export { StyledH2 }
