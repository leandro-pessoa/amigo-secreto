// funções
import styled from 'styled-components'

// variáveis
import { variables, cartoonBorder, flex } from '@/variables'

const StyledButton = styled.button`
    ${flex('row', 'center', 'center')}
    ${cartoonBorder('1px', '4px', '4px', '1px')}
    border-radius: 32px;
    font-family: ${variables.primaryFont};
    font-size: 1.1rem;
    color: ${variables.white};
    padding: 0.3rem 0.3rem;
    transition: 0.1s;
    background-color: ${variables.blue};

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translate(1px, 1px);
    }
`

export { StyledButton }
