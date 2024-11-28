// funções
import styled from 'styled-components'

// variáveis
import { flex, variables, cartoonBorder } from '@/variables'

// referências locais
const inputHeight = '80px'

const StyledForm = styled.form`
    ${flex('row', 'center', 'center')}

    input {
        font-size: 1.3rem;
        padding: 0 1rem;
        padding-left: 3rem;
        margin: 1rem 0;
        border-radius: ${variables.borderRadius} 0 0 ${variables.borderRadius};
        ${cartoonBorder('2px', '2px', '6px', '2px')}
        width: 30%;
        height: calc(${inputHeight} - 8px);

        &:focus {
            box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
            outline: none;
        }

        &::placeholder {
            font-family: ${variables.primaryFont};
        }
    }

    button {
        background-color: ${variables.regularGray};
        font-size: 1.3rem;
        border-radius: 0 ${variables.borderRadius} ${variables.borderRadius} 0;
        ${cartoonBorder('2px', '6px', '6px', '2px')}
        padding: 0 3rem;
        height: ${inputHeight};
        font-family: ${variables.primaryFont};
        color: ${variables.darkGray};
        transition: ease 0.1s;

        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: ${variables.blue};
            color: ${variables.white};
        }
    }

    @media (max-width: ${variables.notebook}) {
        input {
            width: 50%;
            font-size: 1.2rem;
        }

        button {
            font-size: 1.2rem;
        }
    }
    @media (max-width: ${variables.tablet}) {
        button {
            padding: 0 2rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        ${flex('column')}
        input {
            font-size: 1.1rem;
            border-radius: ${variables.borderRadius};
            height: calc(${inputHeight} - 24px);
            width: 70%;
        }

        button {
            font-size: 1.1rem;
            border-radius: ${variables.borderRadius};
            height: calc(${inputHeight} - 16px);
            padding: 0 4rem;
        }
    }

    @media (max-width: ${variables.smallSmartphone}) {
        input {
            font-size: 1rem;
            height: calc(${inputHeight} - 24px);
            width: 75%;
        }

        button {
            font-size: 1rem;
            height: calc(${inputHeight} - 16px);
            padding: 0 2rem;
        }
    }
`

export { StyledForm }
