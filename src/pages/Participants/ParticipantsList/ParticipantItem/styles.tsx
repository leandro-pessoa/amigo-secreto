// funções
import styled from 'styled-components'

// variáveis
import { variables, flex, cartoonBorder } from '@/variables'

const StyledLi = styled.li`
    position: relative;
    ${flex('row', 'space-between', 'center')}
    width: 80%;
    background-color: ${variables.white};
    padding: 1rem 2rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: ${variables.borderRadius};
    ${cartoonBorder('1px', '4px', '4px', '1px')}

    .item__menu-btn {
        ${flex('column', 'center', 'center')}
        background-color: transparent;
        border: none;
        border-radius: 68px;
        padding: 0.2rem 0.2rem;
        transition: ease 0.2s;

        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: ${variables.regularGray}6f;
        }
    }
`

export { StyledLi }
