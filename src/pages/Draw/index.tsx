// funções
import { useNavigate } from 'react-router-dom'

// componentes
import { StyledSection } from './styles'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Title from '@/components/Title'
import DrawBtn from './DrawBtn'
import DrawnList from './DrawnList'

// ícones
import { MdKeyboardArrowLeft } from 'react-icons/md'

// imagens
import plane from '/imagens/aviao.png'

const Draw = () => {
    // função de navegação
    const navigate = useNavigate()

    return (
        <StyledSection>
            <Container>
                <Title>Quem serão os sorteados?</Title>
                <div className='draw__btn-container'>
                    <Button onClick={() => navigate(-1)}>
                        <MdKeyboardArrowLeft size={30} />
                        Voltar
                    </Button>
                    <DrawBtn />
                </div>
                <DrawnList />
                <img src={plane} alt='Imagem de um avião de papel' />
            </Container>
        </StyledSection>
    )
}

export default Draw
