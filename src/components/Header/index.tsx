// componentes
import { StyledHeader } from './styles'

// imagens
import logo from '/imagens/logo.png'
import person from '/imagens/participante.png'

const Header = () => {
    return (
        <StyledHeader>
            <img
                src={logo}
                alt='Logo do sorteador'
                className='header__logo-img'
            />
            <img
                src={person}
                alt='Pessoa segurando um presente na mão'
                className='header__person-img'
            />
        </StyledHeader>
    )
}

export default Header
