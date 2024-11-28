// funções
import styled from 'styled-components'

// variáveis
import { variables, flex, cartoonBorder } from '@/variables'

const StyledUl = styled.ul`
    ${flex('row', 'center', 'center', '1rem')}
    flex-wrap: wrap;
    margin-top: 2rem;

    li {
        ${flex('row', 'space-between', 'center', '.5rem')}
        ${cartoonBorder('1px', '4px', '4px', '1px')}
        width: 50%;
        font-size: 1.4rem;
        background-color: ${variables.white};
        padding: 0.5rem 2rem;
        border-radius: ${variables.borderRadius};

        span {
            color: ${variables.orange};
            margin-right: 0.5rem;
        }
    }

    @media (max-width: ${variables.notebook}) {
        li {
            width: 60%;
        }
    }
    @media (max-width: ${variables.tablet}) {
        li {
            width: 70%;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        li {
            font-size: 1.1rem;
            width: 80%;
        }
    }
`

export { StyledUl }
