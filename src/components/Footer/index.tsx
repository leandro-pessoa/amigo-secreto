// componentes
import { StyledFooter } from './styles'

// ícones
import { FaGithub } from 'react-icons/fa'

// variáveis
import { variables } from '@/variables'

const Footer = () => {
    return (
        <StyledFooter>
            <p>Desenvolvido por Leandro Pessoa</p>
            <a
                href='https://github.com/leandro-pessoa'
                target='__blank'
                rel='external'
            >
                <FaGithub size={26} color={variables.white} />
            </a>
        </StyledFooter>
    )
}
export default Footer
