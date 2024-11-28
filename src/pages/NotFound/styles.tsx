// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledSection = styled.section`
    ${flex('column', 'space-between', 'center', '1rem')}

    h2 {
        text-align: center;
        font-size: 2rem;
        margin: 1rem 0;
        color: ${variables.orange};
        font-weight: 500;
    }

    @media (max-width: ${variables.smartphone}) {
        h2 {
            font-size: 1.5rem;
        }
    }
`

export { StyledSection }
