// funções
import styled from 'styled-components'

// variáveis
import { cartoonBorder, flex, variables } from '@/variables'

// constantes utilizadas
const selectWidth = '200px'

// tipagem dos props
interface ButtonProps {
    readonly $optsDisplay: boolean
}

const StyledButton = styled.button<ButtonProps>`
    ${flex('row', 'flex-start')}
    position: relative;
    width: ${selectWidth};
    ${cartoonBorder('1px', '4px', '4px', '1px')}
    border-bottom-color: ${(props) =>
        props.$optsDisplay ? 'transparent' : variables.black};
    border-radius: ${(props) =>
        props.$optsDisplay ? '12px 12px 0 0' : '12px'};
    padding: 0.5rem 1rem;
    font-family: ${variables.primaryFont};
    background-color: ${variables.white};
    font-size: 1.1rem;

    &:hover {
        cursor: pointer;
    }

    ul {
        ${flex('column', 'auto', 'flex-start', '0rem')}
        position: absolute;
        top: 103%;
        left: -1px;
        background-color: ${variables.white};
        border: 1px solid black;
        border-radius: 0 0 12px 12px;
        width: calc(${selectWidth} - 5px);
        ${cartoonBorder('1px', '4px', '4px', '1px')}
        z-index: 10;

        li {
            text-align: start;
            text-indent: 1rem;
            width: calc(${selectWidth} - 5px);
            padding: 0.5rem 0;
            border-bottom: 1px solid ${variables.regularGray};

            &:last-child {
                border-bottom: none;
            }
        }
    }

    svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
    }
`

export { StyledButton }
