// funções
import { screen, render, fireEvent } from '@testing-library/react'

// componentes
import BtnImgContainer from '../pages/Participants/BtnImgContainer'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate,
    }
})

describe('button de redirecionamento da página de início', () => {
    test('deve navegar para: "/sortear" uma vez ao ser clicado', () => {
        render(<BtnImgContainer />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith('/sortear')
    })
})
