// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'space-between', 'auto', '1rem')}
    border-bottom: 1px solid ${variables.black};
    padding-bottom: 2rem;

    .filters__input-container {
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            transform: translate(0, -70%);
            right: 15px;
        }
    }

    .filters__select-container {
        ${flex('row', 'auto', 'center', '1rem')}
        label {
            font-size: 1.2rem;
            width: max-content;
        }
    }

    @media (max-width: ${variables.tablet}) {
        ${flex('column', 'auto', 'auto', '2rem')}

        .filters__input-container {
            svg {
                left: 240px;
                transform: translate(0, -50%);
            }
        }
    }
    @media (max-width: ${variables.smartphone}) {
        ${flex('column', 'auto', 'center', '2rem')}

        .filters__input-container {
            svg {
                transform: translate(0, -55%);
            }
        }
    }
`

export { StyledDiv }
