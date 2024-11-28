// funções
import styled from 'styled-components'

// variáveis
import { variables, flex, cartoonBorder } from '@/variables'

const StyledDiv = styled.div`
    position: absolute;
    right: 2rem;
    bottom: -100%;
    background-color: ${variables.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 120px;
    z-index: 10;
    ${cartoonBorder('2px', '6px', '6px', '2px')}

    button {
        ${flex('row', 'space-between', 'center', '1rem')}
        width: 120px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${variables.regularGray};
        padding: 0.3rem 0.6rem;

        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: ${variables.lightBlue};
        }

        &:last-child {
            border-bottom: none;
        }

        p {
            font-size: 1.1rem;
            font-family: ${variables.primaryFont};
        }
    }
`

export { StyledDiv }
