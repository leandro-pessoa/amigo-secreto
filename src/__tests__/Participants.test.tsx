// funções
import { render } from '@testing-library/react'

// componentes
import ReduxProvider from '@/components/ReduxProvider'
import Participants from '../pages/Participants'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate,
    }
})

describe('a pagina de participantes', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(
            <ReduxProvider>
                <Participants />
            </ReduxProvider>,
        )

        expect(container).toMatchSnapshot()
    })
})
