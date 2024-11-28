// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledHeader = styled.header`
    ${flex('row', 'center', 'center')}
    background-color: ${variables.blue};
    padding: 2rem 0;

    .header__person-img {
        transform: translate(0, 64.5px);
    }

    @media (max-width: ${variables.tablet}) {
        img {
            width: 300px;
        }

        .header__person-img {
            transform: translate(0, 53px);
        }
    }
    @media (max-width: ${variables.smartphone}) {
        ${flex('column')}

        .header__logo-img {
            transform: translate(0, 40px);
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        img {
            width: 250px;
        }

        .header__person-img {
            transform: translate(0, 50px);
        }
    }
`

export { StyledHeader }
