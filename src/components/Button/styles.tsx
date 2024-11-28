// funções
import styled from 'styled-components'

// variáveis
import { variables, flex, cartoonBorder } from '@/variables'

const StyledButton = styled.button`
    ${flex('row', 'center', 'center', '1rem')}
    background-color: ${variables.orange};
    border-radius: ${variables.borderRadius};
    font-family: ${variables.primaryFont};
    color: ${variables.white};
    ${cartoonBorder('2px', '6px', '6px', '2px')}
    font-size: 1.4rem;
    padding: 1rem 1.8rem;
    transition: ease 0.2s;

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: ${variables.blue};
        transform: translate(1px, 1px);
    }

    @media (max-width: ${variables.tablet}) {
        font-size: 1.3rem;
    }

    @media (max-width: ${variables.smartphone}) {
        padding: 0.8rem 1.2rem;
        font-size: 1.1rem;
    }

    @media (max-width: ${variables.smallSmartphone}) {
        gap: 0.5rem;
        font-size: 1rem;
        padding: 0.7rem 1rem;
    }
`

export { StyledButton }
