// funções
import styled from 'styled-components'

// variáveis
import { variables, cartoonBorder, flex } from '@/variables'

const StyledDiv = styled.div`
    background-color: ${variables.white};
    border-radius: 24px;
    ${cartoonBorder('2px', '6px', '6px', '2px')}
    padding: 2rem;
    width: 40%;

    h2 {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${variables.orange};
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.3rem;
        text-align: center;
    }

    .modal__btn-container {
        ${flex('row', 'flex-start', 'center', '1rem')}
        margin-top: 1rem;

        button {
            ${cartoonBorder('1px', '4px', '4px', '1px')}
            border-radius: 24px;
            font-size: 1.2rem;
            padding: 0.5rem 0.8rem;
            transition: 0.1s;
            color: ${variables.white};

            &:hover {
                cursor: pointer;
            }

            &:active {
                transform: translate(1px, 1px);
            }
        }

        .btn--cancel {
            background-color: ${variables.blue};
        }
        .btn--action {
            background-color: ${variables.orange};
        }
    }

    @media (max-width: ${variables.tablet}) {
        width: 60%;
    }

    @media (max-width: ${variables.smartphone}) {
        width: 70%;
    }
`

export { StyledDiv }
