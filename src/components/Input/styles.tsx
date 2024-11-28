// funções
import styled from 'styled-components'

// variáveis
import { cartoonBorder, variables } from '@/variables'

const StyledInput = styled.input`
    background-color: ${variables.white};
    ${cartoonBorder('1px', '4px', '4px', '1px')}
    border-radius: ${variables.borderRadius};
    font-size: 1.2rem;
    padding: 0.5rem 1rem;

    &:focus {
        outline: none;
        box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.15);
    }
`

export { StyledInput }
