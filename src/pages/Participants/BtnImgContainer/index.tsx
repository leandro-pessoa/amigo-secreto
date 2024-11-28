// funções
import { useNavigate } from 'react-router-dom'

// componentes
import Button from '@/components/Button'
import { StyledSection } from './styles'

// imagens
import bags from '/imagens/sacolas.png'

// ícones
import { FaRegCirclePlay } from 'react-icons/fa6'

const BtnImgContainer = () => {
    // navegação
    const navigate = useNavigate()

    return (
        <StyledSection>
            <Button onClick={() => navigate('/sortear')}>
                <FaRegCirclePlay size={26} />
                Iniciar brincadeira!
            </Button>
            <img src={bags} alt='Imagem de duas sacolas de compras' />
        </StyledSection>
    )
}

export default BtnImgContainer
