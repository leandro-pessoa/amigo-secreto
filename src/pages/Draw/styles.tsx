// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('row', 'center', 'center')}

    h2 {
        text-align: center;
        margin: 2rem 0;
    }

    div {
        .draw__btn-container {
            ${flex('row', 'space-between', 'center')}
        }
    }

    .draw__reload-button {
        padding: 1rem 1rem;
    }

    @media (max-width: ${variables.smartphone}) {
        .draw__reload-button {
            padding: 0.5rem 0.5rem;
        }
    }
`

export { StyledSection }
