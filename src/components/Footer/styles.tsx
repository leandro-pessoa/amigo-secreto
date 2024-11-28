// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledFooter = styled.footer`
    ${flex('row', 'space-around', 'center')}
    background-color: ${variables.blue};
    padding: 2rem 0;

    p {
        color: ${variables.white};
        font-size: 1.2rem;
    }

    @media (max-width: ${variables.smartphone}) {
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: ${variables.smallSmartphone}) {
        p {
            font-size: 1.1rem;
        }
    }
`

export { StyledFooter }
