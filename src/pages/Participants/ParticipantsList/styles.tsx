// funções
import styled from 'styled-components'

// variáveis
import { cartoonBorder, flex, variables } from '@/variables'

const StyledDiv = styled.div`
    width: 100%;
    ${flex('column', 'center', 'center', '2rem')}
    margin-top: 4rem;

    .list__btn-container {
        ${flex('row', 'auto', 'center')}
        position: relative;

        button {
            ${cartoonBorder('1px', '4px', '4px', '1px')}
            border-radius: 32px;
            font-family: ${variables.primaryFont};
            font-size: 1.1rem;
            color: ${variables.white};
            transition: 0.1s;

            &:hover {
                cursor: pointer;
            }

            &:active {
                transform: translate(1px, 1px);
            }
        }

        .btn-container__show-all {
            ${flex('row', 'center', 'center')}
            position: absolute;
            left: 0;
        }

        .btn-container__remove-all {
            background-color: ${variables.red};
            position: absolute;
            right: 0;
            padding: 0.3rem 0.8rem;
        }
    }

    .participants__list {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem;
        text-align: center;

        &::-webkit-scrollbar {
            background-color: ${variables.lightPink};
        }
    }

    @media (max-width: ${variables.smartphone}) {
        .participants__list {
            grid-template-columns: auto;
        }
    }
`

export { StyledDiv }
