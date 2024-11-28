// funções
import { useNavigate } from 'react-router-dom'

// componentes
import { StyledSection } from './styles'
import Button from '@/components/Button'

// ícones
import { MdKeyboardArrowLeft } from 'react-icons/md'

const NotFound = () => {
    // função de navegação
    const navigate = useNavigate()

    return (
        <StyledSection>
            <Button onClick={() => navigate(-1)}>
                <MdKeyboardArrowLeft size={30} />
                Voltar
            </Button>
            <h2>Página não encontrada</h2>
        </StyledSection>
    )
}

export default NotFound
