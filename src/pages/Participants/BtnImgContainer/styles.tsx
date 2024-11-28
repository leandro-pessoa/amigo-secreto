// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('row', 'center', 'center', '5rem')}
    margin-top: 4rem;

    @media (max-width: ${variables.tablet}) {
        gap: 3rem;
        img {
            width: 200px;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        flex-direction: column;
        margin-top: 2rem;
        img {
            width: 200px;
        }
    }
`

export { StyledSection }
