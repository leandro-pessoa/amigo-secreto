// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledH1 = styled.h1`
    color: ${variables.blue};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: ${variables.tablet}) {
        font-size: 1.6rem;
    }
    @media (max-width: ${variables.smartphone}) {
        font-size: 1.5rem;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        font-size: 1.3rem;
    }
`

export { StyledH1 }
