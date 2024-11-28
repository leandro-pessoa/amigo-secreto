// funções
import { fireEvent, render, screen } from '@testing-library/react'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'
import { selectToBeDrawn } from '@/app/reducers/drawReducer'

// componentes
import ReduxProvider from '@/components/ReduxProvider'
import DrawBtn from '../pages/Draw/DrawBtn'
import { ToastContainer } from 'react-toastify'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})
vi.mock('@/app/reducers/drawReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectToBeDrawn: vi.fn(),
    }
})

describe('o button de sorteio no caso de nao haver participantes o suficiente', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandro' },
        ])
    })

    test('nao realiza o sorteio', () => {
        render(
            <ReduxProvider>
                <ToastContainer />
                <DrawBtn />
            </ReduxProvider>,
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const alert = screen.getByText(
            'Adicione pelo menos dois participantes para sortear.',
        )

        expect(alert).toBeVisible()
    })
})

describe('o button de sorteio no caso de todos já forem sorteados', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandro' },
            { id: '2', name: 'Júlia' },
        ])
        vi.mocked(selectToBeDrawn).mockReturnValue([])
    })

    test('nao realiza o sorteio', () => {
        render(
            <ReduxProvider>
                <ToastContainer />
                <DrawBtn />
            </ReduxProvider>,
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)
        const alert = screen.getByText(
            'Todos os participantes já foram sorteados.',
        )

        expect(alert).toBeVisible()
    })
})
