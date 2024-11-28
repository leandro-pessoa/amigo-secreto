// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    width: 70%;

    @media (max-width: ${variables.tablet}) {
        width: 80%;
    }
    @media (max-width: ${variables.smartphone}) {
        width: 90%;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        width: 100%;
    }
`

export { StyledDiv }
